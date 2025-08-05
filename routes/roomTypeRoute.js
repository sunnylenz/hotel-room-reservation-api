const express = require('express');
const { createRoomType, allRoomTypes, updateRoomType, deleteRoomType } = require('../controllers/roomTypeController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');
const authRoles = require('../middlewares/authRoles');

const roomTypeRouter = express.Router();

//POST/api/v1/room-types
roomTypeRouter.post('/', isLoggedIn, authRoles(['Hotel_Manager', 'Admin']), createRoomType);

//GET/api/v1/room-types
roomTypeRouter.get('/', allRoomTypes);

//PUT/api/v1/room-types
roomTypeRouter.put('/:id', isLoggedIn, authRoles(['Hotel_Manager', 'Admin']), updateRoomType);

//DELETE/api/v1/room-types
roomTypeRouter.delete('/:id', isLoggedIn, isAdmin, deleteRoomType);

module.exports = roomTypeRouter;