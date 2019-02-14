const mongoose = require('mongoose');
//const Product = require('../product/product.model');

const ShoppingCartSchema = new mongoose.Schema({
  theUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required: true
  },
  payed: {
    type: Boolean,
    required: true
  }

});

var ShoppingCart = mongoose.model('shoppingCart', ShoppingCartSchema);
module.exports = ShoppingCart;
