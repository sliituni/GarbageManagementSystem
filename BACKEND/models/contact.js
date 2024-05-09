const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    from_name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
