// modules/lecture/lectureService.js
const Lecture = require('./lectureModel');

const createLecture = async (courseId, title, startTime, endTime, description, link) => {
  try {
    const lecture = new Lecture({ courseId, title, startTime, endTime, description, link });
    await lecture.save();
    return lecture;
  } catch (error) {
    throw new Error('Failed to create lecture');
  }
};

module.exports = {
  createLecture,
};
