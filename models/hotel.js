const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
    hotel_name: {
        type: String,
        required: 'Hotel name is required',
        max: 32,
        trim: true
    },
    hotel_description: {
        type: String,
        required: "Hotel description is required",
        trim: true
    },
    image: String,
    star_rating:{
        type: Number,
        required: 'Hotel star rating is required',
        trim: true
    },
    cost_per_night: {
        type: Number,
        required: 'cost per night is required'
    },
    available:{
        type: Boolean,
        required: 'Availiability is required'
    }
});

//Export model
module.exports = mongoose.model('Hotel', hotelSchema);