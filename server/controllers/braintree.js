// const braintree = require('braintree');

// const User = require('../models/User');

// const gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment.Sandbox,
//   merchantId: process.env.BRAINTREE_MERCHANT_ID,
//   publicKey: process.env.BRAINTREE_PUBLIC_KEY,
//   privateKey: process.env.BRAINTREE_PRIVATE_KEY
// });

// const generateToken = async (req, res, next) => {
//   try {
//     // Client token is a string which contains all authorization and configuration information your client needs to initialize the client SDK to communicate with Braintree
//     const { clientToken } = await gateway.clientToken.generate({});
//     res.status(200).json({ clientToken });
//   } catch (error) {
//     next(error);
//   }
// };

// const processPayment = (req, res) => {
//   const { amount, paymentMethodNonce } = req.body;
//   // Create new transaction
//   const newTransaction = gateway.transaction.sale({
//     amount,
//     paymentMethodNonce,
//     options: {
//       submitForSettlement: true
//     }
//   });
//   res.status(201).json({ transaction: newTransaction });
// };

// module.exports = {
//   generateToken,
//   processPayment
// };
