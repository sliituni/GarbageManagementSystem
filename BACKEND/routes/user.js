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

//Update Profile
router.route("/updateProfile/:uId").put(async(req, res) => {
  let userId = req.params.uId;
  const {fullname,email,contactno,address,password} = req.body;

  const updateUser = {
    fullname,
    email,
    contactno,
    address,
    password
  }
  const update = await User.findByIdAndUpdate(userId, updateUser).then(()=>{
    res.status(200).send({status: "User Details Updated"})
  }).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
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

//Display (one)
router.route("getUser/:uID").get(async(req, res)=>{
  let userId = req.params.uID;
  const user = await User.findById(userId).then((user)=>{
    res.status(200).send({status: "User Fetched", user})
  }).catch(()=>{
    console.log(err.message);
    res.status(500).send({status: "Error with get User details",error: err.message})
  })
});

module.exports = router;