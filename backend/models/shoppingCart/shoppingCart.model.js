//Shopping cart schema for documents
const mongoose = require('mongoose');

const ShoppingCartSchema = new mongoose.Schema({
  theUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required: true
  },
  payed: {
    type: Boolean,
    required: true
  },
  cart: [{
    quntity: { type: String, required: true, default :'1' },
    products: { type: mongoose.Schema.Types.ObjectId,ref:'product' }
  }]

});

var ShoppingCart = mongoose.model('shoppingCart', ShoppingCartSchema);
module.exports = ShoppingCart;
