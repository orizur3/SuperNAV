const express = require('express');
const cartLogic = require('./shoppingCart.logic');
const cart = require('./shoppingCart.model');
const tokenLogic = require('../token/tokens_logic')

const carts = express.Router();

carts.get("/myShoppingCart", tokenLogic.verifyToken, (req, res, next) => {

  const cartProducts = cartLogic.getCartProducts(req.body.user._id);
  cartProducts.then(data => {
    var message;
    if (data.length !== 0)
      message = 'Cart \ shoppingList content fetched successfully!';
    else {
      message = 'No carts available.';
    }
    return res.status(200).json({
      message: message,
      cartProducts: data
    });
  });
});

carts.get("/myOrders", tokenLogic.verifyToken, (req, res, next) => {
  const cartProducts = cartLogic.getOrderProduct(req.body.user._id);

  cartProducts.then(data => {
    var message;
    if (data.length !== 0)
      message = 'Cart \ shoppingList content fetched successfully!';
    else {
      message = 'No carts available.';
    }
    return res.status(200).json({
      message: message,
      cartProducts: data
    });
  });
});

//TEST!!!!  -   Cart creation is unecessary at this point, cart creation will be with product input.
carts.post("/myShoppingCart", tokenLogic.verifyToken,(req, res, next) => {
  const newCart = cartLogic.createCart(req.body.user._id);
  newCart.then(cart => {
    return res.status(200).json({
      message: 'Cart Fetched',
      cartProducts: cart
    });
  });
});

carts.delete("/myShoppingCart", tokenLogic.verifyToken, (req, res, next) => {
  const cart = cartLogic.getCart(req.body.id);
  cart.then(cart => {
    if (typeof cart !== typeof 'string') {
      if (cart.theUser == req.body.user._id || req.body.user.role === 'Admin') {
        const deleteOne = cartLogic.deleteCart(req.body.id);
        deleteOne.then(message => {
          return res.status(200).json({
            message: message
          });
        });
      } else {
        const err = new Error('Unauthorized');
        err.status = 400;
        return next(err);
      }
    } else {
      const err = new Error(cart);
      err.status = 400;
      return next(err);
    }
  });
});

carts.put('/myShoppingCart/payment', tokenLogic.verifyToken, (req, res, next) => {
  console.log("start payment");
  const cart = cartLogic.getCart(req.body.id);
  console.log(cart);
  cart.then(cart => {
    if (typeof cart !== typeof 'string') {
      if (cart.theUser == req.body.user._id || req.body.user.role === 'Admin') {
        const payment = cartLogic.payed(req.body.id);
        payment.then(result => {
          return res.status(200).json({
            message: "payment"
          });
        });
      } else {
        const err = new Error('Unauthorized');
        err.status = 400;
        return next(err);
      }
    } else {
      const err = new Error(cart);
      err.status = 400;
      return next(err);
    }
  });
});

module.exports = carts;
