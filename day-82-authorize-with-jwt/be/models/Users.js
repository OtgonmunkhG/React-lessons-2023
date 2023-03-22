const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: [true, "Please provide an Email!"],
  },
  password: {
    type: String,
    require: true,
    unique: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
