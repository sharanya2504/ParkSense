// models/slotModel.js
const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  slotId: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
  carNumber: { type: String, required: false },
  name: { type: String, required: false },
  phone: { type: String, required: false },
  timeParked: { type: Date, default: null },
});

module.exports = mongoose.model('Slot', slotSchema);
