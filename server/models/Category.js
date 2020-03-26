const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: 64
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
