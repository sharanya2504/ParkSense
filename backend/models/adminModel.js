const mongoose = require('mongoose');

// This model will remain simple, as the admin credentials are hardcoded
const adminSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
