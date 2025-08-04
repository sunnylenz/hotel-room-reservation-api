const ErrorResponse = require("../utils/errorResponse")

const createBooking = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Book a hotel room',
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const getBooking = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Get a particular booking'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

const allBookings = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Get all bookings'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

const updateBooking = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Update a booking'
        })
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};


module.exports = {
    createBooking,
    allBookings,
    getBooking,
    updateBooking,
}
