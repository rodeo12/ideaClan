// modules/auth/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('./authController');

router.post('/admin/login', authController.adminLogin);

module.exports = router;
