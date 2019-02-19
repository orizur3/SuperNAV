//http reqire for products
const express = require('express');
const tokenLogic = require('../token/tokens_logic')
const productLogic = require('./product.logic')

const products = express();

// All products
products.get("/products", (req, res, next) => {
  productLogic.getAllProduct().then(documents => {
    return res.status(200).json({
      message: 'Products fetched successfully!',
      products: documents
    });
  });
});

//create new product
products.post("/products", tokenLogic.verifyToken, tokenLogic.rolesAdmin,(req, res, next) => {
  if (req.body.name &&
    req.body.price &&
    req.body.quantity) {
    const product = {
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity
    };
    if (req.body.category)
      product.category = req.body.category;
    else
      product.category = ['general'];
    productLogic.createProduct(product).then(Id => {
      return res.status(201).json({//status ok for new resource
        message: 'Product added successfully',
        productId: Id
      });
    }).catch(error => {
      const err = new Error(error);
      err.status = 400;
      return next(err);
      });
  } else {
    const err = new Error('missing product parameters');
    err.status = 400;
    return next(err);
  }
});

//delete product
products.delete("/products", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  if (req.body.productId) {
    productLogic.deleteProduct(req.body.productId).then(result => {
      if (result == 1)
        res.status(200).json({ message: "Product deleted" });
      else {
        const err = new Error('Product Id undefined');
        err.status = 400;
        return next(err);
      }
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

//update products
products.put("/products", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  if (req.body.productId &&
    req.body.name &&
    req.body.price &&
    req.body.quantity &&
    req.body.category) {

    const edited = {
      id: req.body.productId,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category
    };

    productLogic.editProduct(edited).then(result => {
      res.status(200).json({ message: "Product edited" });
    }).catch(error => {
      const err = new Error(error);
      err.status = 400;
      return next(err);
      });
  } else {
    const err = new Error('missing product parameters');
    err.status = 400;
    return next(err);
  }
});

module.exports = products;
