const express = require('express');
const { signupCtrl, signinCtrl, allUsers, getProfile, updateUser, deleteUser, makeHotelManager, makeAdmin } = require('../controllers/userController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const isAdmin = require('../middlewares/isAdmin');
const authRoles = require('../middlewares/authRoles');


const userRouter = express.Router();

//POST/api/v1/users/signup
userRouter.post('/signup', signupCtrl);

//POST/api/v1/users/login
userRouter.post('/login', signinCtrl);

//GET/api/v1/users/profile/:id
userRouter.get('/profile', isLoggedIn, getProfile);

//GET/api/vi/users
userRouter.get('/', isLoggedIn, authRoles(["Admin"]), allUsers);

//PUT/api/v1/users/:id
userRouter.put('/:id', updateUser);

//PUT/api/v1/users/:id
userRouter.put('/make-manager/:id', isLoggedIn, authRoles(['Admin']), makeHotelManager);

//PUT/api/v1/users/:id
userRouter.put('/make-admin/:id', isLoggedIn, isAdmin, makeAdmin)

//DELETE/api/v1/users/:id
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;