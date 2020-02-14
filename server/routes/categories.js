const { Router } = require('express');

const { categories } = require('../controllers');

const router = Router();

router
  .route('/')
  .get(categories.getAll)
  .post(categories.create);
router
  .route('/:category_id')
  .get(categories.getOne)
  .patch(categories.update)
  .delete(categories.remove);

module.exports = router;
