const Cart = require('./shoppingCart.model');

class cartLogic {

  static getCartProducts(theUserId) {

    const promise = Cart.find({ theUser: theUserId, payed: false }).then(documents => {
      return documents;
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
}



module.exports = cartLogic;
