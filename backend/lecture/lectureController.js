// modules/lecture/lectureController.js
const express = require('express');
const router = express.Router();
const lectureService = require('./lectureService');

router.post('/', async (req, res) => {
  try {
    const { courseId, title, startTime, endTime, description, link } = req.body;
    const lecture = await lectureService.createLecture(courseId, title, startTime, endTime, description, link);
    res.status(201).json(lecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
