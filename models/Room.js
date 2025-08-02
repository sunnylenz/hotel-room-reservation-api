const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true
    },
    roomNumber: {
        type: String,
        required: [true, "room number is required"]
    },
    roomType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RoomType",
        required: true,
    },
    capacity: {
        type: Number,
        required: [true, "maximum number of occupants are required"]
    },
    amenities: [
        {
            type: String
        }
    ],
    pricePerNight: {
        type: Number,
        required: [true, "price is required"]
    },
    photos: {
        type: [String]
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    status: {
        type: String,
        enum: ["Available", "Booked", "Maintenance"],
        default: "Available"
    },

}, {
    timestamps: true
});

//compile the room

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;