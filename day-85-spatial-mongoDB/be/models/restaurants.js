const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    location: {
      type: String,
      enum: ["Point"],
      require: true,
    },
    coordinates: {
      type: [Number],
      require: true,
    },
  },
  {
    collection: "restaurants",
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
