const Category = require('../models/Category');
const AppError = require('../utilities/appError');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log('REQ USER ', req.user);
    const newCategory = await Category.create({ user: req.user._id, name });
    res.status(201).json({ category: newCategory });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { category_id } = req.params;
    const category = await Category.findById(category_id);
    if (!category) {
      throw new AppError('Categord with ID not found', 404);
    }
    res.status(200).json({ category });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { category_id } = req.params;
    const updatedCategory = await Category.findByIdAndUpdate(category_id, {
      user: req.user.id,
      name
    });
    res.status(200).json({ category: updatedCategory });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    // TODO: Look for any products in this category
    const { category_id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(category_id);
    res.status(200).json({ category: deletedCategory });
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
