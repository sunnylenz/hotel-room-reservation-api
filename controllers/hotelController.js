const Hotel = require("../models/Hotel");
const ErrorResponse = require("../utils/errorResponse");

const createHotel = async (req, res, next) => {
    const { name, address, city, country, description, amenities } = req.body;
    try {

        const hotel = await Hotel.create({
            name,
            address,
            city,
            country,
            description,
            amenities,
            user: req.authUser,
        });
        res.json({
            status: 'success',
            data: hotel,
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const allHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find({});
        res.json({
            status: 'success',
            results: hotels.length,
            data: hotels,
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const getHotel = async (req, res, next) => {

    try {
        const hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            return next(new ErrorResponse("Hotel does not exist", 403));
        }

        res.json({
            status: 'success',
            data: hotel,
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const updateHotel = async (req, res, next) => {
    const { name, address, description, country, city, amenities, photos, rating } = req.body;
    try {
        //find the hotel 
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return next(new ErrorResponse("Hotel does not exist", 403));
        }

        await Hotel.findByIdAndUpdate(req.params.id, {
            name,
            address,
            description,
            country,
            city,
            amenities,
            photos,
            rating,
            user: req.authUser,
        }, { new: true });
        res.json({
            status: 'success',
            data: hotel
        });
    } catch (error) {
        next(new ErrorResponse(error.message));
    }
};

const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.json({
            status: 'success',
            data: 'Hotel successfully deleted'
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