var express = require('express');
var router = express.Router();


var users_controller = require('../controllers/usersController')

// GET request for creating a User.
router.get('/', users_controller.user_detail);

// GET request for creating a User.
router.get('/create', users_controller.user_create_get);

// POST request for creating User.
router.post('/create', users_controller.user_create_post);

module.exports = router;
