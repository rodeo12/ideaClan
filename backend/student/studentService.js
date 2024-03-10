// modules/student/studentService.js
const Student = require('./studentModel');

const createStudent = async (name, email, courses) => {
  try {
    const student = new Student({ name, email, courses });
    await student.save();
    return student;
  } catch (error) {
    throw new Error('Failed to create student');
  }
};

const updateStudent = async (id, name, email, courses) => {
  try {
    const student = await Student.findByIdAndUpdate(id, { name, email, courses }, { new: true });
    return student;
  } catch (error) {
    throw new Error('Failed to update student');
  }
};

module.exports = {
  createStudent,
  updateStudent,
};
