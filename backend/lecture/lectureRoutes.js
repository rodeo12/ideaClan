// modules/lecture/lectureRoutes.js
const express = require('express');
const router = express.Router();
const lectureController = require('./lectureController');

router.use(express.json());

router.use('/', lectureController);

module.exports = router;
