const express = require('express');
const mongoose = require('mongoose');
const Product = require('./product.model');

const products = express();

products.get("/products", (req, res, next) => {
  Product.find().then(documents => {
    res.status(200).json({
      message: 'Products fetched successfully!',
      products: documents
    });
  });
});

products.post("/products", (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price
  });
  product.save().then(createdProduct => {
    res.status(201).json({//status ok for new resource
      message: 'Product added successfully',
      productId: createdProduct._id
    });
  });
});


products.delete("/products", (req, res, next) => {
  Product.deleteOne({ _id: req.body.id }).then(result => {
    res.status(200).json({ message: "Product deleted" });
  })
});
module.exports = products;
