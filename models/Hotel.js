const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Hotel name is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    city: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    amenities: {
        type: [String],
    },
    photos: {
        type: [String]
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },

}, {
    timestamps: true
});

//compile the hotel

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;