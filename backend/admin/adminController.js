// modules/admin/adminController.js
const express = require('express');
const router = express.Router();
const adminService = require('./adminService');
const Course = require('../course/courseModel');
const Lecture = require('../lecture/lectureModel');
const Student = require('../student/studentModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('./adminModel');
const authConfig = require('../config/auth');

//Admin-Login
router.post('/admin/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
  
      if (!admin) {
        return res.status(401).json({ message: 'Admin not found' });
      }
  
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: admin._id }, authConfig.secretKey, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Course and Lecture Management
router.post('/courses', async (req, res) => {
  try {
    // Create a new course
    const { name, description, prerequisites } = req.body;
    const course = await Course.create({ name, description, prerequisites });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/courses/:id', async (req, res) => {
  try {
    // Update an existing course
    const { id } = req.params;
    const { name, description, prerequisites } = req.body;
    const course = await Course.findByIdAndUpdate(id, { name, description, prerequisites }, { new: true });
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/courses/:id', async (req, res) => {
  try {
    // Delete a course
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// User Management

 // Get all students
router.get('/students', async (req, res) => {
  try {
   
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a student by id
router.get('/students/:id', async (req, res) => {
  try {
    
    const { id } = req.params;
    const student = await Student.findById(id);
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

 // Update a student by id
router.put('/students/:id', async (req, res) => {
  try {
   
    const { id } = req.params;
    const { name, email, courses } = req.body;
    const student = await Student.findByIdAndUpdate(id, { name, email, courses }, { new: true });
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Content Creation (Assuming content creation involves creating lectures)
router.post('/courses/:courseId/lectures', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, startTime, endTime, description, link } = req.body;
    const lecture = await Lecture.create({ courseId, title, startTime, endTime, description, link });
    res.status(201).json(lecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
