const mongoose = require('mongoose');

// Define a schema for the "garbageRequest" collection in MongoDB
const Schema = mongoose.Schema;

const garbageRequestSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    companyName : {
        type : String,
        required: true
    },
    address : {
        type : String,
        required: true
    },
    contactNo : {
        type : Number,
        required: true
    },
    nic : {
        type : String,
        required: true
    },
    garbageType : {
        type : String,
        required: true
    },
    reason : {
        type : String,
        required: true
    },
    quantity : {
        type : Number,
        required: true
    }
})
// Create a model named "garbageRequest" based on the defined schema
const garbageRequest = mongoose.model("GarbageRequest", garbageRequestSchema);

module.exports = garbageRequest;