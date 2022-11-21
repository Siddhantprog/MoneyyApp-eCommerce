const express = require('express');
const router = express.Router();

const User = require('../controllers/userController');
const Auth = require('../middleware/auth');

router.route('/register').post(User.registerUser);
router.route('/login').post(User.loginUser);
router.route('/logout').get(User.logoutUser);

// export
module.exports = router;
