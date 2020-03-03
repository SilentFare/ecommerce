const { Router } = require('express');

const protect = require('../middlewares/protect');
const admin = require('../middlewares/admin');
const { categories } = require('../controllers');

const router = Router();

router
  .route('/')
  .get(categories.getAll)
  .post(protect, admin, categories.create);
router
  .route('/:category_id')
  .get(categories.getOne)
  .patch(protect, admin, categories.update)
  .delete(protect, admin, categories.remove);

module.exports = router;
