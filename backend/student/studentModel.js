// modules/student/studentModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  // Add any additional fields here
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
