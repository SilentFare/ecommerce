const { Router } = require('express');

const protect = require('../middlewares/protect');
const admin = require('../middlewares/admin');
const { orders } = require('../controllers');

const router = Router();

router
  .route('/', protect, admin)
  .get(orders.getAll)
  .post(orders.create)
  .patch(orders.updateStatus);

module.exports = router;
