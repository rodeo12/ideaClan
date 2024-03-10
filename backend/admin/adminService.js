// modules/admin/adminService.js
const Admin = require('./adminModel');

const createAdmin = async (email, password) => {
  try {
    const admin = new Admin({ email, password });
    await admin.save();
    return admin;
  } catch (error) {
    throw new Error('Failed to create admin');
  }
};

// Add other service functions here

module.exports = {
  createAdmin,
  // Add other service functions here
};
