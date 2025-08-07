const mongoose = require("mongoose");

// connection function

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/reservation_api_db');
        console.log("Database successfully connected");

    } catch (error) {
        console.log(error.message);
        process.exit(1)

    }
}

connectDb();