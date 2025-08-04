const ErrorResponse = require("../utils/errorResponse");

const signupCtrl = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'User signed up'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const signinCtrl = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: "login successful"
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
        req.json({
            status: 'success',
            data: "Users profile"
        })
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