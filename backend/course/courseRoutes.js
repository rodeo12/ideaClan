// modules/course/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('./courseController');

router.use(express.json());

router.use('/', courseController);

module.exports = router;
