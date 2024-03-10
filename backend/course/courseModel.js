// modules/course/courseModel.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  prerequisites: { type: String },
  // Add any additional fields here
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
