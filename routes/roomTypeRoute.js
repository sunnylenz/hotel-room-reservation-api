const express = require('express');
const { createRoomType, allRoomTypes, updateRoomType, deleteRoomType } = require('../controllers/roomTypeController');

const roomTypeRouter = express.Router();

//POST/api/v1/room-types
roomTypeRouter.post('/', createRoomType);

//GET/api/v1/room-types
roomTypeRouter.get('/', allRoomTypes);

//PUT/api/v1/room-types
roomTypeRouter.put('/:id', updateRoomType);

//DELETE/api/v1/room-types
roomTypeRouter.delete('/:id', deleteRoomType);

module.exports = roomTypeRouter;