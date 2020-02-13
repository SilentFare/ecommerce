const User = require('../models/User');
const createToken = require('../utilities/createToken');

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

const login = (req, res, next) => {};

const logout = (req, res, next) => {};

module.exports = {
  register,
  login,
  logout
};
