const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const garbageRequestSchema = new Schema({
     
    name : {
        type : String,
        required: true
    },

    companyName : {
        type : String
    },

    address : {
        type : String,
        required : true
    },

    contactNo : {
        type : Number,
        required : true
    },

    nic : {
        type : Number,
        required : true
    },

    garbageType : {
        type : String,
        required : true
    },

    reason : {
        type : String,
        required : true
    },

    quantity : {
        type : Number,
        required : true
    },
})

const garbageRequest = mongoose.model("GarbageRequest", garbageRequestSchema);

module.exports = garbageRequest;