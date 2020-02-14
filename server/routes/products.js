const { Router } = require('express');

const router = Router();

router.route('/');
router.route('/:product_id');

module.exports = router;
