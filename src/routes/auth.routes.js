const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

router.post('/register', authController.register); // endpoint = http://localhost:3000/user/register
router.post('/login', authController.login); // endpoint = http://localhost:3000/user/login


module.exports = router;