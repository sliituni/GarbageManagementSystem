const express = require('express');
const router = express.Router();
const User = require('../models/user');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const nodemailer = require('nodemailer');
const expressAsyncHandler = require("express-async-handler");

//nodemailer config
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email, subject, message } = req.body;

  try {
    var mailOption = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: subject,
      text: message 
    };

    transporter.sendMail(mailOption, function (error, info) {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent successfully!");
        res.status(200).json({ success: true, message: "Email sent successfully" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

router.post('/sendEmail', sendEmail);

//cloudiary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET
});

const storage = multer.diskStorage({
destination: function (req, file, cb) {
  cb(null, 'uploads/');
},
filename: function (req, file, cb) {
  cb(null, file.originalname);
}
});

const upload = multer({ storage: storage });

//signup route
router.post('/signup', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  try {
    const uploadRes = await cloudinary.uploader.upload(req.file.path, { folder: "userprofiles" });
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      contactno: req.body.contactno,
      address: req.body.address,
      password: req.body.password,
      imageUrl: uploadRes.secure_url
    });

    await newUser.save();

    res.json({ success: true, message: "User registered successfully", imageUrl: uploadRes.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error adding account", details: err.message });
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
router.route("/deleteUser/:uId").delete(async(req, res)=>{
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

// Get user's image URL
router.get('/image/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Send back the image URL
    res.json({ imageUrl: user.imageUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;