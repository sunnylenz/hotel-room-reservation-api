const ErrorResponse = require("../utils/errorResponse");

const createReview = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: "create review"
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};


const updateReview = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: "update review",
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const deleteReview = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'delete review'
        })
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

module.exports = {
    createReview,
    updateReview,
    deleteReview,
}