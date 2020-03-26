const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const createToken = require('../utilities/createToken');
const AppError = require('../utilities/appError');

const register = async (req, res, next) => {
  try {
    // Extract form data from the post request body
    const { firstName, lastName, email, password } = req.body;
    // Check whether an already registered user used the email
    const user = await User.findOne({ email });
    // If the email is already taken...
    if (user) {
      // ...return an error message
      return res.status(409).json({ email: 'E-mail address already exists' });
    }
    // Create a new user in the database
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password
    });
    // Create access token
    const accessToken = await createToken(
      { userId: newUser.id },
      process.env.ACCESS_SECRET,
      process.env.ACCESS_EXPIRATION
    );
    // Create refresh token
    const refreshToken = await createToken(
      { userId: newUser.id },
      process.env.REFRESH_SECRET,
      process.env.REFRESH_EXPIRATION
    );
    // Stick the refresh token in a cookie
    res.cookie('token', refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(process.env.REFRESH_EXPIRATION))
    });
    const { password: omit, ...userWithoutPassword } = newUser.toObject();
    // Send successful response with the new user
    res.status(201).json({ user: userWithoutPassword, token: accessToken });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    // Extract email and password from the post request body
    const { email, password } = req.body;
    // Look for an user with the given email
    const user = await User.findOne({ email });
    // If user was not found...
    if (!user) {
      // ...return an error
      throw new AppError('Wrong Credentials', 404);
    }
    // Compare entered password to the password in the database
    const match = await bcrypt.compare(password, user.password);
    // If the passwords do not match...
    if (!match) {
      // ...return an error
      throw new AppError('Wrong Credentials', 404);
    }
    // Create access token
    const accessToken = await createToken(
      { userId: user.id },
      process.env.ACCESS_SECRET,
      process.env.ACCESS_EXPIRATION
    );
    // Create refresh token
    const refreshToken = await createToken(
      { userId: user.id },
      process.env.REFRESH_SECRET,
      process.env.REFRESH_EXPIRATION
    );
    // Stick the refresh token in a cookie
    res.cookie('token', refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(process.env.REFRESH_EXPIRATION))
    });
    // Extract user object without the password
    const { password: omit, ...userWithoutPassword } = user.toObject();
    // Send successful response with the new user
    res.status(201).json({ user: userWithoutPassword, token: accessToken });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res, next) => {
  // Delete the 'token' cookie
  res.clearCookie('token');
  res.status(200).json({
    message: 'Logged Out'
  });
};

const refreshToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new AppError('Refresh token is required', 499);
    }
    const decodedToken = await jwt.verify(token, process.env.REFRESH_SECRET);
    const user = await User.findById(decodedToken.userId);
    if (!user) {
      throw new AppError('Invalid refresh token', 401);
    }
    const accessToken = await createToken(
      { userId: user.id },
      process.env.ACCESS_SECRET,
      process.env.ACCESS_EXPIRATION
    );
    res.status(200).json({
      token: accessToken
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  refreshToken
};
