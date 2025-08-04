const ErrorResponse = require("../utils/errorResponse");

const createRoomType = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Create room type'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const allRoomTypes = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Get all room types'
        })
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

const updateRoomType = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Update Room type'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const deleteRoomType = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Delete Room Type'
        });
    } catch (error) {
        next(new ErrorResponse(error.message))
    }
}

module.exports = {
    createRoomType,
    allRoomTypes,
    updateRoomType,
    deleteRoomType
}