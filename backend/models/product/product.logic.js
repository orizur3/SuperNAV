//product logic for require and response Mongo DB
const mongoose = require('mongoose');
const Product = require('./product.model');

class Product_Logic {

  static getAllProduct() {
    const promise = Product.find().then(documents => {
      return documents;
    });
    return promise;
  }

  static getProduct(id) {
    const promise = Product.findOne({ _id: id }).then(product => {
      if (product === null)
        return new Promise((resolve, reject) => {
          resolve('product dosent exist');
        });
      return product;
    }).catch(error => {
      return error;
    });
    return promise;
  }

  static createProduct(product) {
    const theProduct = new Product({
      name: product.name,
      price: product.price
    });
    return theProduct.save().then(createdProduct => {
      return createdProduct._id;
    });
     
  }

  static editProduct(productToEdit) {
    const promise=Product.findByIdAndUpdate(productToEdit.id, { name: productToEdit.name, price: productToEdit.price}, { new: false }).then(result => {
      return result;
    });
    return promise;
  }


  static deleteProduct(id) {
    const promise = Product.deleteOne({ _id: id }).then(result => {
      return "Product deleted";
    });
    return promise;
  }

}
module.exports = Product_Logic;
