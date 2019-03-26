//http reqire for products
const express = require('express');
const tokenLogic = require('../token/tokens_logic')
const productLogic = require('./product.logic')

const products = express.Router();
//products.param('id', (req, res, next, id) => {
//  console.log(id);
//  next();
//});

// All products
products.get("/products", (req, res, next) => {
  productLogic.getAllProduct().then(documents => {
    return res.status(200).json({
      message: 'Products fetched successfully!',
      products: documents
    });
  });
});

products.post('/products/smartSearch', tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  if (req.body.productNames) {
    productLogic.searchStrings(req.body.productNames).then(result => {
      return res.status(200).json({
        message: 'search successfully!',
        found: result
      });
    }).catch(error => {
      if (error === 'products doesnt exist') {
        productLogic.getAllProduct().then(documents => {
          return res.status(200).json({
            message: error,
            found: documents
          });
        });
      } else {
        const err = new Error(error);
        err.status = 400;
        return next(err);
      }
    });
  } else {
    const err = new Error('missing search array');
    err.status = 400;
    return next(err);
  }
});

//create new product
products.post("/products/create", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
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
      product.category = 'general';
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
products.delete("/products/delete/:id?", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  if (req.query.id) {
    productLogic.deleteProduct(req.query.id).then(result => {
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
products.put("/products/edit_product", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
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
