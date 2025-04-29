// adminRoutes.js
const express = require('express');
const router = express.Router();
const { getDashboardStats, getBookedSlots, getUnauthorizedParking } = require('../controllers/adminController');
const authenticateAdmin = require('../middleware/auth');

router.get('/stats', authenticateAdmin, getDashboardStats);
router.get('/booked-slots', authenticateAdmin, getBookedSlots);
router.get('/unauthorized-parking', authenticateAdmin, getUnauthorizedParking);

module.exports = router;
