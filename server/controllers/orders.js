const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');

const create = async (req, res, next) => {
  try {
    // 1. Get the products from the order (nested destructuring)
    const {
      order: { products, transaction_id, amount }
    } = req.body;
    // 2. Create new history array to add to the user's order history
    const history = products.reduce((array, product) => {
      const { _id, name, description, count, category } = product;
      array.push({
        _id,
        transaction_id,
        name,
        description,
        category,
        quantity: count,
        amount
      });
      return array;
    }, []);
    // 3. Update the user's order history
    await User.findOneAndUpdate({ _id: req.user._id }, { $push: { history } });
    // 4. Update the products available quantity and sold units
    const bulkOps = products.map(product => ({
      updateOne: {
        filter: { _id: product._id },
        update: { $inc: { quantity: -product.count, sold: +product.count } }
      }
    }));
    await Product.bulkWrite(bulkOps);
    // 5. Create new Order document
    const newOrder = await Order.create({
      ...order,
      user: req.user._id
    });
    res.status(201).json({ order: newOrder });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    // Get all orders sorted from the newest to the oldest
    const orders = await Order.find()
      .populate('user', '_id firstName lastName')
      .sort('-created');
    res.status(200).json({ orders });
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { orderId, status } = req.body;
    const order = await Order.update({ _id: orderId }, { $set: { status } });
    res.json({ order });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  updateStatus
};
