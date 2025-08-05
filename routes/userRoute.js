const express = require('express');
const { signupCtrl, signinCtrl, allUsers, getProfile, updateUser, deleteUser } = require('../controllers/userController');


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

//DELETE/api/v1/users/:id
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;