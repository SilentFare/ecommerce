const { Router } = require('express');

const { users } = require('../controllers');

const router = Router();

router.post('/register', users.register);
router.post('/login', users.login);
router.get('/logout', users.logout);

module.exports = router;
