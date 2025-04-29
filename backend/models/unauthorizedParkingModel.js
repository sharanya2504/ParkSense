// models/unauthorizedParkingModel.js
const mongoose = require('mongoose');

const unauthorizedParkingSchema = new mongoose.Schema({
  slotId: { type: String, required: true },
  carNumber: { type: String, required: true },
  reportedAt: { type: String, required: true },
});

module.exports = mongoose.model('UnauthorizedParking', unauthorizedParkingSchema);
