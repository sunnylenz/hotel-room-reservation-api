const Review = require("../models/Review");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

const createReview = async (req, res, next) => {
    const { hotel, description } = req.body;
    try {
        if (!hotel || !description) {
            return next(new ErrorResponse('Please provide hotel and description', 400));
        }
        const review = await Review.create({
            hotel,
            description,
            user: req.authUser,
        });
        res.json({
            status: 'success',
            data: review
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};


const updateReview = async (req, res, next) => {
    const { description } = req.body;
    try {
        //find the user
        const user = await User.findById(req.authUser);
        if (!user) {
            return next(new ErrorResponse("sorry, you are not authorised, log in again"));
        }
        //find the review
        const review = await Review.findById(req.params.id);
        if (!review) {
            return next(new ErrorResponse("review does not exist", 403));
        }
        //check if review belogs to the user

        if (req.authUser.toString() !== review.user.toString()) {
            return next(new ErrorResponse("You are not allowed to update this review", 403));
        }
        await Review.findByIdAndUpdate(req.params.id, {
            description,

        }, { new: true });

        res.json({
            status: 'success',
            data: review,
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const deleteReview = async (req, res, next) => {
    try {
        //find the review
        const review = await Review.findById(req.params.id);
        //check if review exist
        if (!review) {
            return next(new ErrorResponse("Review does not exist"));
        }
        //check if the user is the owner of the review
        if (req.authUser.toString() !== review.user.toString()) {
            return next(new ErrorResponse("you are not allowed to delete this review", 403));
        }
        await review.deleteOne();

        res.json({
            status: 'success',
            data: 'Review Successfully deleted'
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