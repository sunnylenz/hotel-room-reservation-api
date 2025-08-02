const mongoose = require("mongoose");

// connection function

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_LOCAL_URI);
        console.log("Database successfully connected");

    } catch (error) {
        console.log(error.message);
        process.exit(1)

    }
}

connectDb();