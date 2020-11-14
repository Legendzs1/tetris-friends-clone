var express = require('express');
var router = express.Router();


var users_controller = require('../controllers/usersController')

// GET request for creating a User.
router.get('/', users_controller.user_detail);

// GET request for creating a User.
router.get('/create', users_controller.user_create_get);

// POST request for creating User.
router.post('/create', users_controller.user_create_post);

// POST request for verifying the User's info.
router.post('/log-in', users_controller.user_login_post);

// GET request for verifying the User's info SUCCESS ROUTE.
router.get('/success', users_controller.user_login_success);

// GET request for verifying the User's info FAILURE ROUTE.
router.get('/failure', users_controller.user_login_failure);

// User log out
router.get('/log-out', users_controller.user_logout);

module.exports = router;
