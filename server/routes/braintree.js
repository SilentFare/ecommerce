const { Router } = require('express');

const { generateToken, processPayment } = require('../controllers/braintree');

const router = Router();

// router
//   .route('/', protect)
//   .get(generateToken)
//   .post(processPayment);

module.exports = router;
