const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    A1 : {
        type : String,
        required: true
    },
    A2 : {
        type : String,
        required: true
    },
    A3 : {
        type : String,
        required: true
    },
    A4 : {
        type : String,
        required: true
    },
    A5 : {
        type : String,
        required: true
    },
    A6 : {
        type : String,
        required: true
    },
    A7 : {
        type : String,
        required: true
    },
    A8 : {
        type : String,
        required: true
    }
})

const schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = schedule;