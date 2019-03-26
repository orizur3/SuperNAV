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
      const ac = new ahoCorasick(productsName);
      let result = Promise.resolve([])
      let found;
      let newString = '';
      documents.forEach(product => {
        newString = newString.concat(product.name + ' ');
      });
      const productNames = [];
      ac.search(newString).forEach(product => {
        productNames.push(product[1][0])
      });
      const productCategory = [];
      newString = '';
      documents.forEach(product => {
        newString = newString.concat(product.category + ' ');
      });
      ac.search(newString).forEach(product => {
        productCategory.push(product[1][0])
      });

      if (productNames.length !== 0) {
        result = Product.find({ name: { $regex: productNames.join("|") } });
      }

      if (productCategory.length !== 0) {
        found = Product.find({ category: { $regex: productCategory.join("|") } }).then(productsByCategory => {
          return result.then(products => {
            productsByCategory.forEach(product => {
              if (products.length === products.filter(productFilter => productFilter._id !== product._id).length)
                products.push(product);
            });
            return products;
          });
        });
      } else {
        found = result;
      }
      return found.then(products => {
        if (products.length === 0)
          return Promise.reject('products doesnt exist');
        return products;
      })
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

  static quantityUpdate(cartProducts) {
    const promises = [];
    cartProducts.forEach(product => {
      promises.push(this.getProduct(product._id).then(dbProduct => {
        dbProduct.quantity -= product.quantity;
        return this.editProduct(dbProduct);
      }));
    });
    return Promise.all(promises).then(() => { return 'update is success' });
  }

}
module.exports = Product_Logic;
