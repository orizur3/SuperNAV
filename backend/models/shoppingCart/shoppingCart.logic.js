//Shopping cart logic for require and response to Mongo DB
const Cart = require('./shoppingCart.model');
const Product = require('../product/product.logic');
const User = require('../user/User.logic');
const mongoose = require('mongoose');
const CMS = require('count-min-sketch');
const sortJsonArray = require('sort-json-array');
const hash = require('hashset');

class cartLogic {

  static getAllCarts() {
    const promise = Cart.find().then(carts => {
      return carts;
    });
    return promise;
  }

  static getAllOrders() {
    const promise = Cart.find({ payed: true }).then(carts => {
      return carts;
    });
    return promise;
  }

  //Returns the top 8 product (by the quantity of each in individual orders)
  static getTopSales() {
    return Cart.aggregate([
      { $match: { payed: true } },
      { $unwind: '$cart' },
      {
        $group: {
          _id: '$cart._id',
          totalAmount: { $sum: '$cart.quantity' },
          conutDeal: { $sum: 1 }
        }
      },
      { $sort: { totalAmount: -1 } }
    ], (error, result) => {
      if (error)
        return Promise.reject(error);
      return result;
    }).then(sortProducts => {
      return Product.getProducts(sortProducts.slice(0, 8)).then(topSort => {
        return topSort;
      });
    });
  }

  static editCart(userId, editProducts) {
    const promise = this.getCartProducts(userId).then(cart => {
      let editTotalPrice = 0;
      const newCart = [];
      cart.cart.forEach(cartProduct => {
        editProducts.forEach(editproduct => {
          if (cartProduct._id.equals(editproduct._id)) {
            editTotalPrice += (editproduct.quantity - cartProduct.quantity) * cartProduct.price;
            if (editproduct.quantity !== 0) {
              cartProduct.quantity = editproduct.quantity;
              newCart.push(cartProduct);
            }
          }
        });
      });

      //retrive the missing product from the DB to the new update cart
      cart.cart.forEach(cartProduct => {
        let temp = true;
        editProducts.forEach(editproduct => {
          if (cartProduct._id.equals(editproduct._id))
            temp = false;
        });
        if (temp)
          newCart.push(cartProduct);
      });

      if (newCart.length !== 0) {
        cart.totalPrice += editTotalPrice;
        cart.cart = newCart;
        return Cart.findByIdAndUpdate(cart._id, cart, { new: true }).then(result => {
          return result;
        }).then(newCart => {
          return this.getCartFullProduct(newCart._id);
        });
      } else {
        return this.deleteCart(cart._id).then(() => {
          return Promise.reject('no cart for user');
        });
      }
    });
    return promise;
  }

  // uses mapReduce
  static topProfitable() {
    var o = {};
    o.map = function () {
      if (this.payed) {
        this.cart.forEach(product => {
          emit(product._id, product.quantity * product.price);
        });
      }
    };
    o.reduce = function (k, vals) {
      let mul = 0;
      vals.forEach(val => {
        mul += val;
      });
      return mul;
    };
    const promise = Cart.mapReduce(o).then(mapReduce => {
      const results = mapReduce.results;
      sortJsonArray(results, 'value', 'des');
      return results;
    }).then(sortedResults => {
      const ids = [];
      sortedResults.forEach(res => {
        ids.push(res._id);
      });
      return Product.getProducts(ids).then(products => {
        const newResults = [];
        sortedResults.forEach(oldResult => {
          products.forEach(product => {
            if (product._id.equals(oldResult._id))
              newResults.push({ ProductName: product.name, sales: oldResult.value });
          });
        });
        return newResults;
      });
    });
    return promise;
  }

  static getCartProducts(theUserId) {
    const promise = Cart.findOne({ theUser: theUserId, payed: false }).then(cart => {
      if (cart == null) {
        return Promise.reject('no cart for user');
      } else {
        return cart;
      }
    });
    return promise;
  }

  static getCartFullProduct(theUserId) {
    return this.getCart(theUserId).then(cart => {
      const promises = [];
      const newCart = [];
      cart.cart.forEach(cartProduct => {
        promises.push(Product.getProduct(cartProduct._id).then(product => {
          product.quantity = cartProduct.quantity;
          newCart.push(product);
        }).catch(error => {
          this.removeCartProduct(theUserId, cartProduct._id);
        }));
      });
      return Promise.all(promises).then(() => {
        cart.cart = newCart;
        return {
          totalPrice: cart.totalPrice,
          cart: newCart,
          dateCreated: cart.dateCreated
        };
      });
    });
  }

  static getOrderProduct(theUserId) {
    const promise = Cart.find({ theUser: theUserId, payed: true }).then(documents => {
      const temp = [];
      if (documents.length == 0) {
        return Promise.reject('no orders for the user');
      } else {
        documents.forEach(cart => {
          temp.push(this.getCartFullProduct(cart._id));
        });
        return Promise.all(temp);
      }
    });
    return promise;
  }

  static createCart(theUser) {
    const newCart = new Cart({
      theUser: theUser,
      payed: false
    });
    return newCart.save().then(createCart => {
      return createCart;
    });
  }

  static getCart(id) {
    const promise = Cart.findOne({ _id: id }).then(theCart => {
      if (theCart === null)
        return Promise.reject('Cart dosent exist');
      return theCart;
    });
    return promise;
  }

  static deleteCart(idCart) {
    const promise = Cart.deleteOne({ _id: idCart }).then(result => {
      return "Cart deleted";
    });
    return promise;
  }

  static payCart(theUser) {
    const unpayedCart = this.getCartProducts(theUser);
    const promise = unpayedCart.then(cart => {
      let filteredCart;
      const badProducts = Product.unExist(cart.cart);
      return badProducts.unexist.then(unexist => {
        return badProducts.brokenProducts.then(brokenProducts => {
          if (unexist.length == 0 && brokenProducts.length == 0) {
            Product.quantityUpdate(cart.cart);
            return Cart.findByIdAndUpdate(cart._id, { payed: true }, { new: false }).then(result => {
              return 'payment recieved';
            });
          }
          else {
            filteredCart = cart.cart.filter(product => product._id != unexist[0]._id);
            unexist.forEach(unexisted => {
              filteredCart = filteredCart.filter(product => product._id != unexisted._id);
              cart.totalPrice -= unexisted.price * unexisted.quantity;
            });
            brokenProducts.forEach(invalid => {
              filteredCart = filteredCart.filter(product => product._id != invalid._id);
            });
            if (filteredCart.length !== 0) {
              return Cart.findByIdAndUpdate(cart._id, { cart: filteredCart, totalPrice: cart.totalPrice }, { new: true }).then(result => {
                return this.getCartFullProduct(result._id);
              });
            }
            else {
              return this.deleteCart(cart._id);
            }
          }
        });

      });
    });
    return promise;
  }
  static addProduct(user, newProduct) {
    const cart = this.getCartProducts(user._id).then(cart => {
      return cart;
    }).catch(error => {
      if (error === 'no cart for user')
        return this.createCart(user._id);
      return Promise.reject(error);
    });

    const addProduct = cart.then(cart => {
      const product = Product.getProduct(newProduct.id);
      return product.then(dbProduct => {
        cart.cart.push({ _id: dbProduct._id, quantity: newProduct.quantity, price: dbProduct.price });
        cart.totalPrice += newProduct.quantity * dbProduct.price;
        return Cart.findByIdAndUpdate(cart._id, { totalPrice: cart.totalPrice, cart: cart.cart }, { new: false }).then(result => {
          return result;
        });
      });
    });
    return addProduct;
  }

  static removeCartProduct(userId, productId) {
    const cart = this.getCartProducts(userId).then(cart => {
      let productToRemove = null;
      cart.cart.forEach(product => {
        if (product._id == productId) {
          productToRemove = product;
        }
      });
      if (productToRemove == null)
        return Promise.reject('item doesnt exist in cart');
      const validProduct = Product.getProduct(productId).then(result => {
        cart.totalPrice -= productToRemove.quantity * productToRemove.price;
        return cart.totalPrice;
      }).catch(error => {
        if (error === 'product dosent exist')
          cart.totalPrice -= productToRemove.quantity * productToRemove.price;
        return cart.totalPrice;
      });
      return validProduct.then(totalPrice => {
        const newCart = cart.cart.filter(product => product._id !== productToRemove._id);
        if (newCart.length > 0)
          return Cart.findByIdAndUpdate(cart._id, { totalPrice: totalPrice, cart: newCart }, { new: true }).then(result => {
            return result;
          });
        else
          return this.deleteCart(cart._id);
      });
    });
    return cart;
  }

  static bigSpenders() {
    var sketch = CMS();
    const array = new hash();
    let orderUserId;
    let allOrders = this.getAllOrders()
      .then(orders => {
        const promises = [];
        orders.forEach(order => {
          if (order.totalPrice > 100) {
            promises.push(User.getUserById(order.theUser).then(user => {
              return user.city;
            }).then(city => {
              sketch.update(city, 1);
              array.add(city);
            }));
          }
        });
        return Promise.all(promises).then(() => {
          const cmsResult = [];
          array.toArray().forEach(city => {
            cmsResult.push({ city: city, result: sketch.query(city) })
          })
          return cmsResult;
        });
      });
    return allOrders;
  }
}


module.exports = cartLogic;
