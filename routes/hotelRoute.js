const express = require('express');
const { createHotel, getHotel, allHotels, updateHotel, deleteHotel } = require('../controllers/hotelController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');
const authRoles = require('../middlewares/authRoles');

const hotelRouter = express.Router();

//POST/api/v1/hotels
hotelRouter.post('/', isLoggedIn, authRoles(['Hotel_manager', 'Admin']), createHotel);

//GET/api/v1/hotels/:id
hotelRouter.get('/:id', getHotel);

//GET/api/v1/hotels
hotelRouter.get('/', allHotels);

//PUT/api/v1/hotels/:id
hotelRouter.put('/:id', isLoggedIn, authRoles(['Hotel_Manager', 'Admin']), updateHotel);

//DELETE/api/v1/hotels/:id
hotelRouter.delete('/:id', isLoggedIn, isAdmin, deleteHotel);

module.exports = hotelRouter;