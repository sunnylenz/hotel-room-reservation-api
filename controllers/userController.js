const bcrypt = require('bcryptjs');
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const generateToken = require('../utils/generateToken');
const getTokenFromHeader = require('../utils/getTokenFromHeader');

const signupCtrl = async (req, res, next) => {
    const { firstname, lastname, username, email, phone, password } = req.body;
    try {
        //check if user already exist
        const userExist = await User.findOne({ email });
        if (userExist) {
            return next(new ErrorResponse("User already exists"));
        }

        //hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //create the user
        const user = await User.create({
            firstname,
            lastname,
            username,
            email,
            phone,
            password: hashedPassword,
        });

        res.json({
            status: 'success',
            data: user
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const signinCtrl = async (req, res, next) => {
    const { email, password } = req.body;
    try {

        //check if email exists
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return next(new ErrorResponse("Invalid credentials"));
        }

        //verify password
        const isPassword = await bcrypt.compare(password, userExist.password);

        if (!isPassword) {
            return next(new ErrorResponse("Invalid credentials"));
        }

        res.json({
            status: 'success',
            data: {
                firstname: userExist.firstname,
                lastname: userExist.lastname,
                username: userExist.username,
                email: userExist.email,
                isAdmin: userExist.isAdmin,
                token: generateToken(userExist._id),
            }
        });

    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const allUsers = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: "Get all users",
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const getProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.authUser);
        req.json({
            status: 'success',
            data: user,
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const updateUser = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Update user'
        })
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const deleteUser = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: "user deleted"
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

module.exports = {
    signupCtrl,
    signinCtrl,
    allUsers,
    getProfile,
    updateUser,
    deleteUser,
}