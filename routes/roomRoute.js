const express = require('express');
const { deleteRoom, updateRoom, allRooms, getRoom, createRoom } = require('../controllers/roomController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');
const authRoles = require('../middlewares/authRoles');

const roomRouter = express.Router();

//Post/api/v1/rooms
roomRouter.post('/', isLoggedIn, authRoles(['Hotel_Manager', 'Admin']), createRoom);

//GET/api/v1/rooms/:id
roomRouter.get('/:id', getRoom);

//GET/api/v1/rooms
roomRouter.get('/', allRooms);

//PUT/api/v1/rooms/:id
roomRouter.put('/:id', isLoggedIn, authRoles(['Hotel_manager', 'Admin']), updateRoom);

//DELETE/api/v1/rooms/:id
roomRouter.delete('/:id', isLoggedIn, authRoles(['Hotel_Manager','Admin']), deleteRoom);




module.exports = roomRouter;