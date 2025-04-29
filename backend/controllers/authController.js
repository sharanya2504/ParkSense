const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/studentModel');
const Teacher = require('../models/teacherModel');
const Admin = require('../models/adminModel');

// Hardcoded Admin credentials
const ADMIN_USERNAME = 'admin123';
const ADMIN_PASSWORD = '123456';

// Sign Up Controller
const signUp = async (req, res) => {
  const { name, phone, carNumber, password, role } = req.body;

  try {
    let user;

    // Check if user already exists based on role
    if (role === 'student') {
      user = await Student.findOne({ phone });
    } else if (role === 'teacher') {
      user = await Teacher.findOne({ phone });
    }

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user based on role
    if (role === 'student') {
      user = new Student({ name, phone, carNumber, password: hashedPassword });
    } else if (role === 'teacher') {
      user = new Teacher({ name, phone, carNumber, password: hashedPassword });
    }

    // Save user
    await user.save();

    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login Controller
const login = async (req, res) => {
  const { phone, username, password, role } = req.body;

  try {
    let user;

    // Handle admin login first
    if (role === 'admin') {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // If correct admin credentials
        const token = jwt.sign({ username: ADMIN_USERNAME, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ message: 'Admin login successful', token });
      } else {
        return res.status(400).json({ message: 'Invalid admin credentials' });
      }
    }

    // For student and teacher login
    if (role === 'student') {
      user = await Student.findOne({ phone }); // Check student by phone
    } else if (role === 'teacher') {
      user = await Teacher.findOne({ phone }); // Check teacher by phone
    }

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if password matches
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token for student or teacher
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Forgot Password Controller
const forgotPassword = async (req, res) => {
  const { phone, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    let user;

    // Find the user by phone for student or teacher
    user = await Student.findOne({ phone });
    if (!user) user = await Teacher.findOne({ phone });

    if (!user) {
      return res.status(400).json({ message: 'No account found with this phone number' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user password
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signUp, login, forgotPassword };
