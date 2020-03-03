const { Router } = require('express');

const users = require('./users');
const categories = require('./categories');
const products = require('./products');
const orders = require('./orders');
const braintree = require('./braintree');

const router = Router();

router.use('/users', users);
router.use('/categories', categories);
router.use('/products', products);
router.use('/orders', orders);
router.use('/braintree', braintree);

module.exports = router;
