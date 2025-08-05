const express = require('express');
const { signupCtrl, signinCtrl, allUsers, getProfile, updateUser, deleteUser, makeHotelManager, makeAdmin } = require('../controllers/userController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');


const userRouter = express.Router();

//POST/api/v1/users/signup
userRouter.post('/signup', signupCtrl);

//POST/api/v1/users/login
userRouter.post('/login', signinCtrl);

//GET/api/v1/users/profile/:id
userRouter.get('/profile', getProfile);

//GET/api/vi/users
userRouter.get('/', allUsers);

//PUT/api/v1/users/:id
userRouter.put('/:id', updateUser);

//PUT/api/v1/users/:id
userRouter.put('/:id', isLoggedIn, isAdmin, makeHotelManager);

//PUT/api/v1/users/:id
userRouter.put('/:id', isLoggedIn, isAdmin, makeAdmin)

//DELETE/api/v1/users/:id
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;