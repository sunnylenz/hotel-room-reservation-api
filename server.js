const express = require("express");
require("dotenv").config();
require("./config/dbconnection");
const app = express();



//middlewares
// app.use(cors())
// app.use(cookieParser())
app.use(express.json());
//routes
//error handlers


//listen to the server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running at port ${PORT}`));
