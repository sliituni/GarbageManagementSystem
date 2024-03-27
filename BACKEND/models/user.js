const mongoose = require('mongoose');

// Define a schema for the "user" collection in MongoDB
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contactno : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
})
// Create a model named "User" based on the defined schema
const user = mongoose.model("User", userSchema);

module.exports = user;
