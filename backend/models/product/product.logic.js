//product logic for require and response Mongo DB
// Add sales property to each product (update his value in every payment - shopping cart).
const Product = require('./product.model');
const ahoCorasick = require('ahocorasick');

class Product_Logic {

  static getAllProduct() {
    const promise = Product.find().populate('-quantity').then(documents => {
      return documents;
    });
    return promise;
  }

  static searchStrings(productsName) {
    return this.getAllProduct().then(documents => {
      let newString = '';
      documents.forEach(product => {
        newString = newString.concat(product.name + ' ' + product.category+' ');
      });
      const productNames = [];
      const ac = new ahoCorasick(productsName);
      ac.search(newString).forEach(product => {
        productNames.push(product[1][0])
      });
      const promise = Product.find({ name: { $in: productNames } }).then(products => {
        if (products.length === 0)
          return Promise.reject('product dosent exist');
        return products;
      });
      return promise;
    });
  }

  static getProducts(ids) {
    const promise = Product.find({ _id: { $in: ids } }).then(products => {
      if (products.length === 0)
        return Promise.reject('product dosent exist');
      return products;
    });
    return promise;
  }

  static getProduct(id) {
    const promise = this.getProducts(id).then(product => {
      return product[0];
    });
    return promise;
  }

  static createProduct(product) {
    const theProduct = new Product({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      category: product.category
    });
    const promise = theProduct.save().then(createdProduct => {
      return createdProduct._id;
    });
    return promise;
  }

  static editProduct(productToEdit) {
    const promise = Product.findByIdAndUpdate(productToEdit.id, { name: productToEdit.name, price: productToEdit.price, quantity: productToEdit.quantity, category: productToEdit.category }, { new: false }).then(result => {
      return result;
    });
    return promise;
  }

  static deleteProduct(id) {
    const promise = Product.deleteOne({ _id: id }).then(result => {
      console.log(result);
      return result.deletedCount;
    });
    return promise;
  }

  static unExist(products) {
    let brokenProducts = Promise.resolve([]);
    let unexist = Promise.resolve([]);
    products.forEach(product => {
      unexist = unexist.then(array => {
        return this.getProduct(product._id).then(dbProduct => {
          if (dbProduct.quantity < product.quantity)
            array.push(product);
          return array;
        }).catch(error => {
          if (error === 'product dosent exist')
            array.push(product);
          return array;
          });
        brokenProducts = brokenProducts.then(array => {
          return this.getProduct(product._id).then(dbProduct => {
            return array;
          }).catch(error => {
            if (error !== 'product dosent exist')
              array.push(product);
            return array;
          });
        });
      });
    });
    return { unexist: unexist, brokenProducts: brokenProducts };
  }

}
module.exports = Product_Logic;
