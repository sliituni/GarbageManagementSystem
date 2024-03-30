const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const communityswapSchema = new Schema({
    itemName:{
        type: String,
        required: true,
    },
    itemCondition:{
        type: String,
        required: true,
    },
    contactNo:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    image: {
        data: Buffer, 
        contentType: String
    },
    imageUrl: { 
        type: String, 
        required: true,
    }
   
});

const Communityswap = mongoose.model("Swapitem", communityswapSchema);

module.exports = Communityswap;
