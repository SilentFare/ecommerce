const { Router } = require('express');

const protect = require('../middlewares/protect');
const admin = require('../middlewares/admin');
const { products } = require('../controllers');

const router = Router();

router
  .route('/')
  .get(products.getAll)
  .post(protect, admin, products.create);
router
  .route('/:product_id')
  .get(products.getOne)
  .patch(products.update)
  .delete(products.remove);

module.exports = router;
