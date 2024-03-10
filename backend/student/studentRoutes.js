// modules/student/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('./studentController');

router.use(express.json());

router.use('/', studentController);

module.exports = router;
