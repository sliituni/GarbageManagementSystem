// models/analitics.js
const mongoose = require('mongoose');

// Define a schema for the "Analitics" collection in MongoDB
const Schema = mongoose.Schema;

const analiticsSchema = new Schema({
    wasteamount: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    wastetype: {
        type: String,
        required: true
    }
});

// Create a model named "analitics" based on the defined schema
const Analitics = mongoose.model("Analitics", analiticsSchema);

module.exports = Analitics;
