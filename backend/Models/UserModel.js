const { Schema, mongoose } = require("mongoose");

//? Define User Schema
const userSchema = new Schema({
  userName: {
    type: String,
    required: [true, "Username is required."],
    trim: true,
    minlength: [3, "Username must be at least 3 characters long."],
    maxlength: [50, "Username cannot exceed 50 characters."],
  },
  userEmail: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format."],
  },
  userPassword: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must be at least 6 characters long."],
    maxlength: [100, "Password cannot exceed 100 characters."],
  },
  userPhone: {
    type: String,
    // unique: true,
    sparse: true,
    maxlength: [10, "Phone number cannot exceed 10 digits"],
    match: [/^09\d{8}$/, "Invalid Syrian phone number format. Phone number must start with 09 and be 10 digits long."],
  },

  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: "{VALUE} is not a valid role.",
    },
    default: "user",
  },
});

//? Create models
const User = mongoose.model("User", userSchema);

module.exports = User;
