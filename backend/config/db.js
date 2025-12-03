// Import mongoose (helps connect Node.js to MongoDB)
const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Try connecting to MongoDB using mongoose
    // This is your local database URL: mongodb://127.0.0.1:27017/skilleraX
    await mongoose.connect("mongodb://127.0.0.1:27017/skilleraX");

    // If connection is successful
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    // If connection fails, show the error
    console.log("Database Error:", error);

    // Exit the app (stop server) because DB connection failed
    process.exit(1);
  }
};

// Export the function so server.js can use it
module.exports = connectDB;
