const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    users: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
      }
    ],
    categories: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
      }
    ],
    name: {
      type: String,
      maxlength: 64,
      trim: true,
      required: true
    },
    description: {
      type: String,
      maxlength: 4000,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0.01
    },
    quantity: {
      type: Number,
      required: true,
      min: 0
    },
    sold: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
