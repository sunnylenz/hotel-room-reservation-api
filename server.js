const express = require("express");
const globalErrHandler = require("./middlewares/globalErrHandler");
require("dotenv").config();
require("./config/dbconnection");
const app = express();

//middlewares
// app.use(cors())
// app.use(cookieParser())
app.use(express.json());
//routes
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
