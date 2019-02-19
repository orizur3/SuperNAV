//Shopping cart logic for require and response to Mongo DB
const Cart = require('./shoppingCart.model');
const Product = require('../product/product.logic');

class cartLogic {

  static getAllCarts() {
    const promise = Cart.find().then(carts => {
      return carts;
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

  static getOrderProduct(theUserId) {
    const promise = Cart.find({ theUser: theUserId, payed: true }).then(documents => {
      if (documents.length == 0) {
        return Promise.reject('no orders for the user');
      } else {
        return documents;
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
        return new Promise.reject('Cart dosent exist');
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
          if (unexist.length == 0 && brokenProducts.length == 0)
            return Cart.findByIdAndUpdate(cart._id, { payed: true }, { new: false }).then(result => {
              return 'payment recieved';
            });
          else {
            unexist.forEach(unexisted => {
              filteredCart = cart.cart.filter(product => product._id != unexisted._id);
              cart.totalPrice -= unexisted.price * unexisted.quantity;
            });
            brokenProducts.forEach(invalid => {
              filteredCart = filteredCart.filter(product => product._id != invalid._id);
            });
            if (filteredCart.length !== 0)
              return Cart.findByIdAndUpdate(cart._id, { cart: filteredCart, totalPrice: cart.totalPrice }, { new: true }).then(result => {
                return result;
              });
            else
              return this.deleteCart(cart._id);
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
        console.log(dbProduct._id);
        cart.cart.push({ _id: dbProduct._id, quantity: newProduct.quantity, price: dbProduct.price });
        cart.totalPrice += newProduct.quantity * dbProduct.price;
        return Cart.findByIdAndUpdate(cart._id, { totalPrice: cart.totalPrice, cart: cart.cart }, { new: false }).then(result => {
          return result;
        });
      });
    });
    return addProduct;
  }

  static removeCartProduct(user, productId) {
    const cart = this.getCartProducts(user._id).then(cart => {
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
}



module.exports = cartLogic;
