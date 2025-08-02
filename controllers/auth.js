const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { appErr } = require('../utils/error');
const jwt = require('jsonwebtoken');

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            ...req.body,
            password: hash,
        });

        res.status(200).send("User has been created");
    } catch (error) {
        next(error)
    }
}