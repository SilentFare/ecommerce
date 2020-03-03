const mongoose = require('mongoose');

// Subdocument: cartItemSchema nested as array in orderSchema
const cartItemSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    count: Number
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    products: [cartItemSchema],
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    transaction_id: {},
    amount: { type: Number },
    address: String,
    status: {
      type: String,
      default: 'Not processed',
      enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
    },
    updated: Date
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
