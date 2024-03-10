// modules/admin/adminModel.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add any additional fields here
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
