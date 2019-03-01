//http require for Orders and Shopping Cart
const express = require('express');
const cartLogic = require('./shoppingCart.logic');
const tokenLogic = require('../token/tokens_logic')

const carts = express.Router();

//get all Carts and Orders from all users 
carts.post("/shoppingCarts", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
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
carts.post("/myShoppingCart", tokenLogic.verifyToken, (req, res, next) => {
  const cartProducts = cartLogic.getCartProducts(req.body.user._id);
  cartProducts.then(data => {
    cartLogic.getCartFullProduct(data._id).then(data => {
      return res.status(200).json({
        message: 'Cart \ shoppingList content fetched successfully!',
        cartProduct: data
      });
    });
  }).catch(error => {
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
carts.post("/myOrders", tokenLogic.verifyToken, (req, res, next) => {
  const orderList = cartLogic.getOrderProduct(req.body.user._id);
  orderList.then(orders => {
    const orderListForUser = [];
    orders.forEach(order => {
      const orderProduct = {
        cart: order.cart,
        dateCreated: order.dateCreated,
        totalPrice: order.totalPrice
      };
      orderListForUser.push(orderProduct);
    });
    return res.status(200).json({
      message: 'order list content fetched successfully!',
      ordersProducts: orderListForUser
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

// using GroupBy query
carts.get("/topSales", (req, res, next) => {
  const topSales = cartLogic.getTopSales();
  topSales.then(cart => {
    return res.status(200).json({
      message: 'Top 8 Sales',
      cartProducts: cart
    });
  }).catch(error => {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  });
});

// using mapreduce
carts.get("/topProfitable", (req, res, next) => {
  const profitable = cartLogic.topProfitable();
  profitable.then(cart => {
    return res.status(200).json({
      message: 'Top 8 Sales',
      cartProducts: cart
    });
  }).catch(error => {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  });
});




//Removes product from cart (by product ID) 
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

// payment for the user cart 
carts.put('/myShoppingCart/payment', tokenLogic.verifyToken, (req, res, next) => {
  const payment = cartLogic.payCart(req.body.user._id);
  payment.then(result => {
    if (result === 'payment recieved' || result === 'Cart deleted') {
      return res.status(200).json({
        message: result
      });
    } else {
      const cartProduct = {
        cart: result.cart,
        dateCreated: result.dateCreated,
        totalPrice: result.totalPrice
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

// update cart product quantity
carts.put('/myShoppingCart/updateCart', tokenLogic.verifyToken, (req, res, next) => {
  if (req.body.editProducts) {
    cartLogic.editCart(req.body.user._id, req.body.editProducts).then(result => {
      return res.status(200).json({ message: result })
    }).catch(error => {
      if (error === 'no cart for user') {
        return res.status(200).json({ message: 'your cart is empty' })
      } else {
        const err = new Error(error);
        err.status = 400;
        return next(err);
      }
    });
  } else {
    const err = new Error('missing parameters');
    err.status = 400;
    return next(err);
  }
});

// Returns the big spender city - using Count-Min-Sketch algortihem 
carts.get("/bigSpenders", (req, res, next) => {
  const bigSpenders = cartLogic.bigSpenders();
  bigSpenders.then(cities => {
    return res.status(200).json({
      message: 'Most profitable cities',
      cities: cities
    });
  });
});

module.exports = carts;

//after deleting product from the cart, if the cart is empty delete the cart too!!
//TEST!!!!  -   Cart deleting is necessary at this point, cart deleting will be with deleting last product
carts.delete("/shoppingCarts/delete", (req, res, next) => {
  if (req.body.cartId) {
    const cart = cartLogic.getCart(req.body.cartId);
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

//TEST!!!!  -   Cart creation is unecessary at this point, cart creation will be with product input.
//carts.post("/shoppingCarts/create", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
//  const newCart = cartLogic.createCart(req.body.user._id);
//  newCart.then(cart => {
//    return res.status(200).json({
//      message: 'Cart Fetched',
//      cartProducts: cart
//    });
//  });
//});

