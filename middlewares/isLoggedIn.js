const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLoggedIn = (req, res, next) => {
    // get token from the header
    const token = getTokenFromHeader(req);

    // verify the token
    const decodedUser = verifyToken(token);

    //save the user into req obj
    req.authUser = decodedUser.id;

    if (!decodedUser) {
        return res.json({
            message: 'Invalid/Expired token, log in again'
        });
    } else {
        next();
    }
}