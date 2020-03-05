const Product = require('../models/Product');

const create = async (req, res, next) => {
  try {
    const { categories, name, description, price, quantity } = req.body;
    const newProduct = Product.create({
      user: [req.user.id],
      categories,
      name,
      description,
      price,
      quantity
    });
    res.status(201).json({ product: newProduct });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const selectedProduct = await Product.findById(product_id);
    if (!selectedProduct) {
      throw new AppError('Product with ID not found', 404);
    }
    res.status(200).json({ product: selectedProduct });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    let { order, sortBy, limit } = req.query;
    order = order ? order : 'asc';
    sortBy = sortBy ? sortBy : '_id';
    limit = limit ? parseInt(limit) : 10;
    const products = await Product.find()
      .populate('category')
      .sort([[sortBy, order]])
      .limit(limit);
    console.log('Products', products);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      product_id,
      req.body
    );
    res.status(200).json({ product: updatedProduct });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(product_id);
    res.status(200).json({ product: deletedProduct });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  remove
};
