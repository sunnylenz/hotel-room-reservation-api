const ErrorResponse = require("../utils/errorResponse");

const createHotel = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'create hotel'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const allHotels = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'get all hotels'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const getHotel = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'get a hotel'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const updateHotel = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Update hotel'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const deleteHotel = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'delete hotel'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}


module.exports = {
    createHotel,
    allHotels,
    getHotel,
    updateHotel,
    deleteHotel
}