const express = require('express');
const { createBooking, getBooking, allBookings, updateBooking } = require('../controllers/bookingsController');

const bookingRouter = express.Router();

//POST/api/v1/bookings
bookingRouter.post('/', createBooking);

//GET/api/v1/bookings/:id
bookingRouter.get('/:id', getBooking);

//GET/api/v1/bookings
bookingRouter.get('/', allBookings);

//PUT/api/v1/bookings/:id
bookingRouter.put('/:id', updateBooking);

//DELETE/api/v1/bookings
//bookingRouter.delete('/:id');


module.exports = bookingRouter;