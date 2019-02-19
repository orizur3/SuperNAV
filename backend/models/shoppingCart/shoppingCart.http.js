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
  }).catch(error => {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  });
});

//get ShoppingCart by user (ID)
carts.get("/myShoppingCart", tokenLogic.verifyToken, (req, res, next) => {
  const cartProducts = cartLogic.getCartProducts(req.body.user._id);
  cartProducts.then(data => {
    let cartProduct = {
      cart: data.cart,
      dateCreated: data.dateCreated,
      totalPrice: data.totalPrice
    };
    return res.status(200).json({
      message: 'Cart \ shoppingList content fetched successfully!',
      cartProduct: cartProduct
    });
  }).catch(error => {
    console.log(error);
    if (error === 'no cart for user')
      return res.status(200).json({
        message: 'your cart is empty'
      });
    else {
      const err = new Error(error);
      err.status = 400;
      return next(err);
    }
  });
});

//get Orders by user (ID)
carts.get("/myOrders", tokenLogic.verifyToken, (req, res, next) => {
  const orderList = cartLogic.getOrderProduct(req.body.user._id);
  orderList.then(orders => {
    const orderProduct = {
      cart: orders.cart,
      dateCreated: orders.dateCreated,
      totalPrice: orders.totalPrice
    };
    return res.status(200).json({
      message: 'order list content fetched successfully!',
      ordersProducts: orderProduct
    });
  }).catch(error => {
    if (error === 'no orders for the user')
      return res.status(200).json({
        message: 'your order list is empty'
      });
    else {
      const err = new Error(error);
      err.status = 400;
      return next(err);
    }
  });
});

//TEST!!!!  -   Cart creation is unecessary at this point, cart creation will be with product input.
carts.post("/shoppingCarts/create", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  const newCart = cartLogic.createCart(req.body.user._id);
  newCart.then(cart => {
    return res.status(200).json({
      message: 'Cart Fetched',
      cartProducts: cart
    });
  });
});

//after deleting product from the cart, if the cart is empty delete the cate too!!
//TEST!!!!  -   Cart deleting is necessary at this point, cart deleting will be with deleting last product
carts.delete("/shoppingCarts/delete", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  if (req.body.cartId) {
    const cart = cartLogic.getCart(req.body.id);
    cart.then(cart => {
      const deleteOne = cartLogic.deleteCart(req.body.cartId);
      deleteOne.then(message => {
        return res.status(200).json({
          message: message
        });
      });
    }).catch(error => {
      const err = new Error(error);
      err.status = 400;
      return next(err);
      });
  } else {
    const err = new Error('missing cartId');
    err.status = 400;
    return next(err);
  }
});

carts.put("/myShoppingCart/removeProduct", tokenLogic.verifyToken, (req, res, next) => {
  if (req.body.productId) {
    const removeProduct = cartLogic.removeCartProduct(req.body.user, req.body.productId).then(newCart => {
      let cartProduct;
      if (newCart !== 'Cart deleted')
        cartProduct = {
          cart: newCart.cart,
          dateCreated: newCart.dateCreated,
          totalPrice: newCart.totalPrice
        };
      else
        cartProduct = 'your cart is empty';
      return res.status(200).json({
        message: 'remove product successfully!',
        cartProduct: cartProduct
      });
    }).catch(error => {
      const err = new Error(error);
      err.status = 400;
      return next(err);
    });
  } else {
    const err = new Error('missing productId');
    err.status = 400;
    return next(err);
  }
});

// payment on the user cart
carts.put('/myShoppingCart/payment', tokenLogic.verifyToken, (req, res, next) => {
  const payment = cartLogic.payCart(req.body.user._id);
  payment.then(result => {
    if (result === 'payment recieved' || result === 'Cart deleted') {
      return res.status(200).json({
        message: result
      });
    } else {
      const cartProduct = {
        cart: newCart.cart,
        dateCreated: newCart.dateCreated,
        totalPrice: newCart.totalPrice
      };
      return res.status(200).json({
        message: 'cart has been filterd',
        newCart: cartProduct
      });
    }
  }).catch(error => {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  });

});

//add product to user cart
carts.put('/myShoppingCart/addProduct', tokenLogic.verifyToken, (req, res, next) => {
  if (req.body.productId &&
    req.body.quantity &&
    req.body.quantity > 0) {
    const addProduct = cartLogic.addProduct(req.body.user, { id: req.body.productId, quantity: req.body.quantity });
    addProduct.then(result => {
      return res.status(200).json({ message: 'Product has been added' })
    }).catch(error => {
      const err = new Error(error);
      err.status = 400;
      return next(err);
    });
  } else {
    const err = new Error('missing parameters for new product or quantity=0');
    err.status = 400;
    return next(err);
  }
});

module.exports = carts;
