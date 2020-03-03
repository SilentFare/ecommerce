const AppError = require('../utilities/appError');

module.exports = async (req, res, next) => {
  if (req.user.role !== 'admin') {
    throw new AppError('Access denied', 401);
  }
  next();
};
