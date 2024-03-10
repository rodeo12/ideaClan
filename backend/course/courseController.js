// modules/course/courseController.js
const express = require('express');
const router = express.Router();
const courseService = require('./courseService');

router.post('/', async (req, res) => {
  try {
    const { name, description, prerequisites } = req.body;
    const course = await courseService.createCourse(name, description, prerequisites);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, prerequisites } = req.body;
    const course = await courseService.updateCourse(id, name, description, prerequisites);
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await courseService.deleteCourse(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
