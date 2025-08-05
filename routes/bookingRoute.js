const express = require('express');
const { createBooking, getBooking, allBookings, updateBooking } = require('../controllers/bookingsController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const authRoles = require('../middlewares/authRoles');
const isAdmin = require('../middlewares/isAdmin');

const bookingRouter = express.Router();

//POST/api/v1/bookings
bookingRouter.post('/', isLoggedIn, createBooking);

//GET/api/v1/bookings/:id
bookingRouter.get('/:id', isLoggedIn, getBooking);

//GET/api/v1/bookings
bookingRouter.get('/', authRoles(['Hotel_Manager', 'Admin']), allBookings);

//PUT/api/v1/bookings/:id
bookingRouter.put('/:id', isLoggedIn, updateBooking);

//DELETE/api/v1/bookings
//bookingRouter.delete('/:id',isAdmin,deleteBokings);


module.exports = bookingRouter;