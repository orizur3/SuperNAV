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
    quantity: { type: Number, required: true, default :'1' },
    cartProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    price: { type: Number, required: true}
  }],
  totalPrice: {
    type: Number,
    required: true,
    default: 0
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  }

});

var ShoppingCart = mongoose.model('shoppingCart', ShoppingCartSchema);
module.exports = ShoppingCart;
