const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth'); 
const User = require('../models/Users/User');

// Get user data
router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user data:", error); // Debugging line
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
