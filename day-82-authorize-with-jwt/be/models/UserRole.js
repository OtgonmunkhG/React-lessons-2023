const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the Role Name"],
  },
});

const UserRole = mongoose.model("userrole", userRoleSchema);

module.exports = UserRole;
