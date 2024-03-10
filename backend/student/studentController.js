    // modules/student/studentController.js
const express = require('express');
const router = express.Router();
const studentService = require('./studentService');

router.post('/', async (req, res) => {
  try {
    const { name, email, courses } = req.body;
    const student = await studentService.createStudent(name, email, courses);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, courses } = req.body;
    const student = await studentService.updateStudent(id, name, email, courses);
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
