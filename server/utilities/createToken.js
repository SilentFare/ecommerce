const jwt = require('jsonwebtoken');

const createToken = async (payload, secret, duration) => {
  const token = await jwt.sign(payload, secret, {
    expiresIn: duration
  });
  return token;
};

module.exports = createToken;
