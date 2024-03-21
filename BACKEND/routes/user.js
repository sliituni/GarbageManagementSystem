const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      contactno: req.body.contactno,
      address: req.body.address,
      password: req.body.password
    });

    await newUser.save();
    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
