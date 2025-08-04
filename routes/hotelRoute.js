const express = require('express');
const { createHotel, getHotel, allHotels, updateHotel, deleteHotel } = require('../controllers/hotelController');

const hotelRouter = express.Router();

//POST/api/v1/hotels
hotelRouter.post('/', createHotel);

//GET/api/v1/hotels/:id
hotelRouter.get('/:id', getHotel);

//GET/api/v1/hotels
hotelRouter.get('/', allHotels);

//PUT/api/v1/hotels/:id
hotelRouter.put('/:id', updateHotel);

//DELETE/api/v1/hotels/:id
hotelRouter.delete('/:id', deleteHotel);

module.exports = hotelRouter;