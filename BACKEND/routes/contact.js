const router = require('express').Router();
const Contact = require('../models/contact');

// Add contact
router.post('/addContact', (req, res) => {
    const { from_name, subject, message } = req.body;

    // Create a new Contact instance
    const newContact = new Contact({
        from_name,
        subject,
        message
    });

    // Save the new contact to the database
    newContact.save()
        .then(() => res.json('Inquiry added successfully'))
        .catch((err) => {
            console.error(err);
            res.status(500).json('Error: Unable to add data');
        });
});

module.exports = router;

//display (ALL)
router.route("/allContact").get((req,res)=>{
    Contact.find().then((contact)=>{
        res.json(contact)
    }).catch((err)=>{
        console.log(err)
    })
})