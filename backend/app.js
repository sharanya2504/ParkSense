const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// Connect to Database
connectDB();

app.get('/', (req, res) => {
  res.send('Backend server running ✅');
});


// Routes
app.use('/api/auth', authRoutes);

app.get('/api/admin/stats', (req, res) => {
  res.json({ totalSlots: 100, bookedSlots: 50, unauthorizedParking: 5 });
});

app.get('/api/admin/booked-slots', (req, res) => {
  res.json([
    {
      slotId: 1,
      name: "John Doe",
      carNumber: "MH12AB1234",
      phoneNumber: "9876543210",
      userType: "faculty"
    },
    {
      slotId: 2,
      name: "Jane Smith",
      carNumber: "MH14XY5678",
      phoneNumber: "8765432109",
      userType: "student"
    },
    {
      slotId: 3,
      name: "Alice Johnson",
      carNumber: "MH15ZZ9999",
      phoneNumber: "9123456780",
      userType: "faculty"
    }
  ]);
});



app.get('/api/admin/unauthorized-parking', (req, res) => {
  res.json([
    {
      slotId: 10,
      carNumber: "ABC1234",
      time: "9:15 AM"
    },
    {
      slotId: 15,
      carNumber: "XYZ5678",
      time: "10:45 AM"
    },
    {
      slotId: 17,
      carNumber: "XYZ5678",
      time: "10:45 AM"
    },
    {
      slotId: 18,
      carNumber: "XYZ5678",
      time: "10:45 AM"
    },
    {
      slotId: 15,
      carNumber: "XYZ5678",
      time: "10:45 AM"
    },
    {
      slotId: 15,
      carNumber: "XYZ5678",
      time: "10:45 AM"
    },
    {
      slotId: 15,
      carNumber: "XYZ5678",
      time: "10:45 AM"
    },
    {
      slotId: 15,
      carNumber: "XYZ5678",
      time: "10:45 AM"
    },
    {
      slotId: 15,
      carNumber: "XYZ5678",
      time: "10:45 AM"
    }

  ]);
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
