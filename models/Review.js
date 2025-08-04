const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "user is required"]
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: [true, "Hotel is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, {
    timestamps: true
});


const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;