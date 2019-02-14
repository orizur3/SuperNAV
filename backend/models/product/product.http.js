const express = require('express');
const tokenLogic = require('../token/tokens_logic')
const productLogic = require('./product.logic')

const products = express();

products.get("/products", (req, res, next) => {
  productLogic.getAllProduct().then(documents => {
    return res.status(200).json({
      message: 'Products fetched successfully!',
      products: documents
    });
  });
});

products.post("/products", tokenLogic.verifyToken, tokenLogic.rolesAdmin,(req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  productLogic.createProduct(product).then(Id => {
    return res.status(201).json({//status ok for new resource
      message: 'Product added successfully',
      productId: Id
    });
  });
});


products.delete("/products", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  
  productLogic.deleteProduct(req.body.id).then(result => {
    res.status(200).json({ message: "Product deleted" });
  })
});

products.put("/products", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  const edited = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price
  };
  productLogic.editProduct(edited).then(result => {
    res.status(200).json({ message: "Product edited" });
  })
});

module.exports = products;
