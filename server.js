const express = require("express");
const globalErrHandler = require("./middlewares/globalErrHandler");
const ErrorResponse = require("./utils/errorResponse");
const userRouter = require("./routes/userRoute");
const roomRouter = require("./routes/roomRoute");
const hotelRouter = require("./routes/hotelRoute");
const bookingRouter = require("./routes/bookingRoute");
const roomTypeRouter = require("./routes/roomTypeRoute");
const reviewRouter = require("./routes/reviewRoutes");
require("dotenv").config();
//require("./config/dbconnection");

const app = express();

//middlewares
// app.use(cors())
// app.use(cookieParser())
app.use(express.json());


//routes
//=====================
// users route
app.use('/api/v1/users/', userRouter);//keep the base url on the server and the additional resource on the router
// room routes
app.use('/api/v1/rooms/', roomRouter);
// roomtype route
app.use('/api/v1/room-types/', roomTypeRouter);
// hotel route
app.use('/api/v1/hotels/', hotelRouter);
//booking route
app.use('/api/v1/bookings/', bookingRouter);
//review route
app.use('/api/v1/reviews/', reviewRouter);
//=====================

//error handlers
app.use(globalErrHandler);
//404 error
app.use('*', (req, res) => {
    res.status(404).json({
        message: `${req.originalUrl} - Route Not Found`,
    });
});

//listen to the server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running at port ${PORT}`));
