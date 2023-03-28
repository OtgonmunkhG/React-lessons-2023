const mongoose = require("mongoose");

const shippingAddressSchema = new mongoose.Schema({
  address: {
    type: String,
    require: true,
  },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ShippingAddress = mongoose.model(
  "ShippingAsdress",
  shippingAddressSchema
);
module.exports = ShippingAddress;
