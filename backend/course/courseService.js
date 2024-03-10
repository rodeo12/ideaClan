// modules/course/courseService.js
const Course = require('./courseModel');

const createCourse = async (name, description, prerequisites) => {
  try {
    const course = new Course({ name, description, prerequisites });
    await course.save();
    return course;
  } catch (error) {
    throw new Error('Failed to create course');
  }
};

const updateCourse = async (id, name, description, prerequisites) => {
  try {
    const course = await Course.findByIdAndUpdate(id, { name, description, prerequisites }, { new: true });
    return course;
  } catch (error) {
    throw new Error('Failed to update course');
  }
};

const deleteCourse = async (id) => {
  try {
    await Course.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Failed to delete course');
  }
};

module.exports = {
  createCourse,
  updateCourse,
  deleteCourse,
};
