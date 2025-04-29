// adminController.js

const Slot = require('../models/slotModel');  // Assuming Slot model exists
const UnauthorizedParking = require('../models/unauthorizedParkingModel');  // Assuming UnauthorizedParking model exists

// Fetch stats for dashboard
const getDashboardStats = async (req, res) => {
  try {
    const totalSlots = await Slot.countDocuments();
    const bookedSlots = await Slot.countDocuments({ isBooked: true });
    const unauthorizedParking = await UnauthorizedParking.countDocuments();

    res.json({
      totalSlots,
      bookedSlots,
      unauthorizedParking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// // Fetch booked slots
// const getBookedSlots = async (req, res) => {
//   try {
//     const bookedSlots = await Slot.find({ isBooked: true });
//     res.json(bookedSlots);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Fetch unauthorized parking data
// const getUnauthorizedParking = async (req, res) => {
//   try {
//     const unauthorizedParking = await UnauthorizedParking.find();
//     res.json(unauthorizedParking);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



const getBookedSlots = async (req, res) => {
  try {
    const bookedSlots = await Slot.find({ isBooked: true }); // Only fetch booked slots
    res.json(bookedSlots.map(slot => ({
      slotId: slot.slotId,
      name: slot.name,
      carNumber: slot.carNumber,
      phoneNumber: slot.phone,
      userType: slot.name === "faculty" ? "faculty" : "student", // Example of setting userType
    })));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching booked slots' });
  }
};


const getUnauthorizedParking = async (req, res) => {
  try {
    const unauthorizedParkingData = await UnauthorizedParking.find();
    res.json(unauthorizedParkingData.map(entry => ({
      slotId: entry.slotId,
      carNumber: entry.carNumber,
      time: entry.reportedAt, // Ensure it's a readable time format
    })));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching unauthorized parking data' });
  }
};


module.exports = { getDashboardStats, getBookedSlots, getUnauthorizedParking };
