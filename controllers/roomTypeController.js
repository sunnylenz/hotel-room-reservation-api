const RoomType = require("../models/RoomType");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

const createRoomType = async (req, res, next) => {
    const { name, description, basePrice, defaultAmenities } = req.body;
    try {
        //find the user
        // const user = await User.findById(req.authUser);
        // if (!user) {
        //     return next(new ErrorResponse("user does not exist"));
        // }
        const roomType = await RoomType.create({
            name,
            description,
            basePrice,
            defaultAmenities //wifi,air conditioner
        });

        res.json({
            status: 'success',
            data: roomType,
        });


    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const allRoomTypes = async (req, res, next) => {
    try {
        const roomtypes = await RoomType.find({});
        res.json({
            status: 'success',
            results: roomtypes.length,
            data: roomtypes,
        })
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
}

const updateRoomType = async (req, res, next) => {
    const { name, description, basePrice, defaultAmenities } = req.body;
    try {
        //find the roomType
        const roomType = await RoomType.findById(req.params.id);

        if (!roomType) {
            return next(new ErrorResponse("RoomType does not exist", 403));
        }

        await RoomType.findByIdAndUpdate(req.params.id, {
            name,
            description,
            basePrice,
            defaultAmenities,
            user: req.authUser,
        }, { new: true });

        res.json({
            status: 'success',
            data: roomType,
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const deleteRoomType = async (req, res, next) => {
    try {
        // find the roomtype to be deleted
        const roomtype = await RoomType.findById(req.params.id);

        if (!roomtype) {
            return next(new ErrorResponse("RoomType does not exist", 403));
        }

        await RoomType.findByIdAndDelete(req.params.id);
        res.json({
            status: 'success',
            data: 'Roomtype deleted successfully',
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