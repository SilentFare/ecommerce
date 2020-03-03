const users = require('./users');
const categories = require('./categories');
const products = require('./products');
const orders = require('./orders');
const braintree = require('./braintree');

module.exports = {
  users,
  categories,
  products,
  orders,
  braintree
};
