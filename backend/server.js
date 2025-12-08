// Import express (framework to create API server)
const express = require("express");

// Import cors (allows frontend to talk to backend)
const cors = require("cors");

// Import the MongoDB connection function from config/db.js
const connectDB = require("./config/db");

// Create an express application
const app = express();

// Enable CORS so frontend (React, etc.) can send requests to backend
app.use(cors());

// Allow backend to accept JSON data in request body (req.body)
app.use(express.json());

// Connect to MongoDB database
connectDB();

// Connect all user-related routes (like /register) to the base URL /api/users
app.use("/api/users", require("./routes/userRoutes"));

// Test Route - this runs when someone visits http://localhost:5000/
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start the server on port 5000
// If successful, log the message
app.listen(5000, () => console.log("Server is running on port 5000"));
