const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const authRoles = (allowedRoles) => async (req, res, next) => {
    // get token from the header
    const token = getTokenFromHeader(req);

    // verify the token
    const decodedUser = verifyToken(token);

    //save the user into req obj
    req.authUser = decodedUser.id;
    //find the user in db
    const user = await User.findById(decodedUser.id);

    //check if admin
    if (!allowedRoles.includes(user.role)) {
        return next(new ErrorResponse("Access Denied, you cant access this route", 403))
    } else {
        return next();
    }

}

module.exports = authRoles;

