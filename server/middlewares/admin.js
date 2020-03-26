const AppError = require('../utilities/appError');

module.exports = async (req, res, next) => {
  try {
    console.log('Req user', req.user);
    if (req.user.role !== 'admin') {
      throw new AppError('Access denied', 401);
    }
    next();
  } catch (error) {
    next(error);
  }
};
