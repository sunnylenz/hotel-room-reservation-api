const express = require('express');
const { deleteRoom, updateRoom, allRooms, getRoom, createRoom } = require('../controllers/roomController');

const roomRouter = express.Router();

//Post/api/v1/rooms
roomRouter.post('/', createRoom);

//GET/api/v1/rooms/:id
roomRouter.get('/:id', getRoom);

//GET/api/v1/rooms
roomRouter.get('/', allRooms);

//PUT/api/v1/rooms/:id
roomRouter.put('/:id', updateRoom);

//DELETE/api/v1/rooms/:id
roomRouter.delete('/:id', deleteRoom);




module.exports = roomRouter;