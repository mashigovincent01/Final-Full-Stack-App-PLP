const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /users - Create a new user
router.post('/users', userController.createUser);

// GET /users - Get all users
router.get('/users', userController.getUsers);

module.exports = router;
