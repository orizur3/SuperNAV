//http require for Orders and Shopping Cart
const express = require('express');
const cartLogic = require('./shoppingCart.logic');
const tokenLogic = require('../token/tokens_logic')

const carts = express.Router();

//get all Carts and Orders from all users
carts.get("/shoppingCarts", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  const allUserCart = cartLogic.getAllCarts();
  allUserCart.then(Carts => {
    var message;
    if (Carts.length !== 0)
      message = 'Cart / shoppingList content fetched successfully!';
    else {
      message = 'No carts available.';
    }
    return res.status(200).json({
      message: message,
      cartProducts: Carts
    });
  });
});

//get ShoppingCart for user
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

//get Orders for user
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

//TEST!!!!  -   Cart deleting is necessary at this point, cart deleting will be with deleting last product
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

// payment on the user cart
carts.put('/myShoppingCart/payment', tokenLogic.verifyToken, (req, res, next) => {
  if (req.body.id) {
    const cart = cartLogic.getCart(req.body.id);
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
  } else {
    const err = new Error('id product dosent exist');
    err.status = 400;
    return next(err);
  }
});

//add product to user cart
carts.put('/myShoppingCart/addProduct', tokenLogic.verifyToken, (req, res, next) => {
  if (req.body.id) {
    const addProduct = cartLogic.addProduct(req.body.user, req.body.id);
    addProduct.then(result => {
      if (typeof result !== typeof 'string') {
        return res.status(200).json({message:'Product addition'})
      } else {
        const err = new Error(result);
        err.status = 400;
        return next(err);
      }
    });
  } else {
    const err = new Error('id product dosent found');
    err.status = 400;
    return next(err);
  }
});

module.exports = carts;
