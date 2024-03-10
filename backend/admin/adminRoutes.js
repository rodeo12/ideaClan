// modules/admin/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('./adminController');

// Middleware for authentication (if needed)
// router.use(authMiddleware);

// Routes for Admin functionalities
router.post('/admin/login', adminController.adminLogin);
router.post('/courses', adminController.createCourse);
router.put('/courses/:id', adminController.updateCourse);
router.delete('/courses/:id', adminController.deleteCourse);
router.post('/courses/:courseId/lectures', adminController.createLecture);
router.get('/students', adminController.getAllStudents);
router.get('/students/:id', adminController.getStudentById);
router.put('/students/:id', adminController.updateStudent);

module.exports = router;
