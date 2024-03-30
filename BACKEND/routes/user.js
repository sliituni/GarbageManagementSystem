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

    res.json({ success: true, message: 'Login successful', userDetails:user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Update Profile
router.put("/updateProfile/:uId", async(req, res) => {
  try {
    const userId = req.params.uId;
    const { fullname, email, contactno, address, password } = req.body;
    const updateUser = { fullname, email, contactno, address, password };

    const updatedUser = await User.findByIdAndUpdate(userId, updateUser, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ status: "User not found" });
    }

    res.status(200).json({ status: "User Details Updated", user: updatedUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "Error with updating user details", error: err.message });
  }
});

//Delete User account
router.route("deleteUser/:uId").delete(async(req, res)=>{
  let userId = req.params.uId;

  await User.findByIdAndDelete(userId).then((user)=>{
    res.status(200).send({status :"User Deleted"})
  }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with delete user", error: err.message})
  })
});

// Display (one)
router.get("/getUser/:uId", async (req, res) => {
  try {
    const userId = req.params.uId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ status: "User not found" });
    }
    res.status(200).json({ status: "User Fetched", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "Error with get User details", error: err.message });
  }
});

module.exports = router;