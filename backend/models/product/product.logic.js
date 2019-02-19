//product logic for require and response Mongo DB
const Product = require('./product.model');

class Product_Logic {

  static getAllProduct() {
    const promise = Product.find().populate('-quantity').then(documents => {
      return documents;
    });
    return promise;
  }

  static getProduct(id) {
    const promise = Product.findOne({ _id: id }).then(product => {
      if (product === null)
        return Promise.reject('product dosent exist');
      return product;
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
