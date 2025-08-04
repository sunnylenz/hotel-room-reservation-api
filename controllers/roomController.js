const ErrorResponse = require("../utils/errorResponse")

const createRoom = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: "create room"
        });
    } catch (error) {
        next(new ErrorResponse(error.message))
    }
};

const getRoom = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'Get a single room details'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const allRooms = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: "get all rooms"
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const updateRoom = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: "update room",
        })
    } catch (error) {
        next(new ErrorResponse(error.message))
    }
};

const deleteRoom = async (req, res, next) => {
    try {
        res.status({
            status: 'success',
            data: 'delete room'
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

module.exports = {
    createRoom,
    getRoom,
    allRooms,
    updateRoom,
    deleteRoom
}