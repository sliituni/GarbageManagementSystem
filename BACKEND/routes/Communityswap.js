const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const Communityswap = require("../models/Communityswap");
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET
});

// Add item route with image upload
router.route("/add").post(upload.single('image'), async (req, res) => {
    const { itemName, itemCondition, contactNo, email, address } = req.body;

    try {
        // Upload image to Cloudinary
        const uploadRes = await cloudinary.uploader.upload(req.file.path, { folder: "communityswap" });

        // Get the image URL from Cloudinary response
        const imageUrl = uploadRes.secure_url;

        // Create new item with Cloudinary image URL
        const newSwap = new Communityswap({
            itemName,
            itemCondition,
            contactNo,
            email,
            address,
            imageUrl
        });

        await newSwap.save();
        // res.json("Item added");
        res.json({ status: "Item added", imageUrl });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error adding item" });
    }
});

router.route("/").get((req, res) => {
    Communityswap.find().then((items) => {
        res.json(items)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ error: "Error fetching items" });
    });
});

router.route("/update/:id").put(upload.single('image'), async (req, res) => {
  const itemId = req.params.id;
  const { itemName, itemCondition, contactNo, email, address } = req.body;
  let imageUrl;

  try {
      // Check if an image is included in the update request
      if (req.file) {
          // Upload image to Cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
          imageUrl = result.secure_url;
          
          // Delete the previous image from Cloudinary if exists
          const existingItem = await Communityswap.findById(itemId);
          if (existingItem.imageUrl) {
              const publicId = existingItem.imageUrl.split('/').slice(-1)[0].split('.')[0];
              await cloudinary.uploader.destroy(publicId);
          }
      }

      // Update the item with new fields and image URL if available
      const updateFields = {
          itemName,
          itemCondition,
          contactNo,
          email,
          address
      };
      if (imageUrl) {
          updateFields.imageUrl = imageUrl;
      }

      await Communityswap.findByIdAndUpdate(itemId, updateFields);
      res.status(200).send({ status: "Item updated" });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error updating item" });
  } finally {
      // Delete the uploaded image from the local storage
      if (req.file) {
          fs.unlinkSync(req.file.path);
      }
  }
});


router.route("/delete/:id").delete(async (req, res) => {
    const itemId = req.params.id;

    try {
        await Communityswap.findByIdAndDelete(itemId);
        res.status(200).send({ status: "Item deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error deleting item" });
    }
});

router.route("/get/:id").get(async (req, res) => {
    const itemId = req.params.id;

    try {
        const item = await Communityswap.findById(itemId);
        res.status(200).send({ status: "Item fetched", item });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching item" });
    }
});
router.get("/getByImageUrl/:imageUrl", async (req, res) => {
    const imageUrl = req.params.imageUrl;

    try {
        const item = await Communityswap.findOne({ imageUrl: imageUrl });
        if (!item) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.status(200).json({ status: "Item fetched", item });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching item" });
    }
});
// Fetch items by email
router.route("/getByEmail/:email").get(async (req, res) => {
    const userEmail = req.params.email;

    try {
        const items = await Communityswap.find({ email: userEmail });
        res.status(200).json({ status: "Items fetched by email", items });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error fetching items by email" });
    }
});

module.exports = router;
