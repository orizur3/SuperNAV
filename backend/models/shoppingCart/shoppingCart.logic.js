//Shopping cart logic for require and response to Mongo DB
const Cart = require('./shoppingCart.model');
const Product = require('../product/product.logic');

class cartLogic {

  static getAllCarts() {
    const promise = Cart.find().then(carts => {
      return carts;
    }).catch(error => {
      return error;
    });
    return promise;
  }

  static getCartProducts(theUserId) {
    const promise = Cart.findOne({ theUser: theUserId, payed: false }).then(cart => {
      if (cart == null) {
        return 'create cart'
      } else {
        return cart;
      }
    }).catch(error => {
      return error;
    });
    return promise;
  }

  static getOrderProduct(theUserId) {
    const promise = Cart.find({ theUser: theUserId, payed: true }).then(documents => {
      return documents;
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
    }).catch (error => {
      return error;
    });
  }

  static getCart(id) {
    const promise = Cart.findOne({ _id: id }).then(theCart => {
      if (theCart === null)
        return new Promise((resolve, reject) => {
          resolve('Cart dosent exist');
        });
      return theCart;
    }).catch(error => {
      return error;
    });
    return promise;
  }

  static deleteCart(idCart) {
    const promise = Cart.deleteOne({ _id: idCart }).then(result => {
      return "Cart deleted";
    });
    return promise;
  }

  static payed(idCart) {
    const promise = Cart.findByIdAndUpdate(idCart, { payed: true }, { new: false }).then(result => {
      return result;
    });
    return promise;
  }

  static addProduct(user, productId) {
    const cart = this.getCartProducts(user._id).then(cart => {
      if (cart == 'create cart') {
        const cartCreate = this.createCart(user._id);
        return cartCreate.then(createCart => {
          return createCart;
        });
      } else {
        return cart;
      }
    });

    const addProduct = cart.then(cart => {
      if (typeof cart !== typeof 'string') {
        const product = Product.getProduct(productId);
        return product.then(theProduct => {
          if (typeof theProduct !== typeof 'string') {
            cart.cart.push({ product: theProduct._id, quantity: '1' });
            return Cart.findByIdAndUpdate(cart._id, { cart: cart.cart }, { new: false }).then(result => {
              return result;
            });
          } else {
            return theProduct;
          }
        });
      } else {
        return cart;
      }
    });
    return addProduct;
  }
}



module.exports = cartLogic;
