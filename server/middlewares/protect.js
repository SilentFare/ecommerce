const jwt = require('jsonwebtoken');

const AppError = require('../utilities/appError');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    // 1. Get access token from the request header
    const { authorization } = req.headers;
    if (!authorization) {
      throw new AppError('Unauthorized access', 403);
    }
    const token = authorization.split(' ')[1];
    if (!token) {
      throw new AppError('Invalid token', 403);
    }
    // 2. Verify the access token
    const decodedToken = await jwt.verify(token, process.env.ACCESS_SECRET);
    // 3. Search for the user associated with the token
    const user = await User.findById(decodedToken.userId);
    const { password, ...userWithoutPassword } = user;
    // 4. Set user as property of the request object
    req.user = userWithoutPassword;
    next();
  } catch (err) {
    next(err);
  }
};
