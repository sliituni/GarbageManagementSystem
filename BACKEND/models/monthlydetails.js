const mongoose = require('mongoose');

const monthlydetailsSchema = new mongoose.Schema({
    month: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
});

const monthlydetails = mongoose.model("MonthlyDetails", monthlydetailsSchema);

module.exports = monthlydetails;