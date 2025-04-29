const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,   // name is required
  },
  phone: {
    type: String,
    required: true,   // phone is required
    unique: true,     // Ensure uniqueness of phone number
  },
  carNumber: {
    type: String,
    required: true,   // carNumber is required
  },
  password: {
    type: String,
    required: true,   // password is required
  },
  role: { 
    type: String, 
    default: 'student' 
  },
});

module.exports = mongoose.model('Student', studentSchema);
