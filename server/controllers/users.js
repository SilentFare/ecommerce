const User = require('../models/User');

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ email: 'E-mail address already exists' });
    }
    const newUser = await User.create({ first });
  } catch (error) {
    next(error);
  }
};

const login = (req, res, next) => {};

const logout = (req, res, next) => {};

module.exports = {
  register,
  login,
  logout
};
