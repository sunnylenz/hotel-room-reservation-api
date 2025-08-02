const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required']
    },
    Lastname: {
        type: String,
        required: [true, "Last name is required"]
    },
    username: {
        type: String,
        required: [true, "Usermname is required"],
        unique: true,
        trim: true,
    },
    photo: {
        type: String,
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    isBlocked: {
        type: String,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["Admin", "Guest", "Hotel_Manager"],
        default: "Guest"
    },
    createdAt: {
        type: Date,
        default: Date
    }

});

//compile the user

const User = mongoose.model('User', userSchema);
module.exports = User;