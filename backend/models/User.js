// Import mongoose to create schemas and models
const mongoose = require("mongoose");

// Create the User schema (defines how user data will look in MongoDB)
const userSchema = new mongoose.Schema(
  {
    // User's full name
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },

    // User's email (must be unique)
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true, // prevents duplicate email registration
    },

    // User's password (will be hashed before saving)
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: 6, // minimum password length
    },
  },

  // Automatically adds createdAt and updatedAt fields
  { timestamps: true }
);

// Export the model so it can be used in controllers
// "User" = model name
// userSchema = schema above
module.exports = mongoose.model("User", userSchema);
