const mongoose = require("mongoose");

const neighborhoodSchema = new mongoose.Schema(
  {
    name: String,
    location: {
      type: String,
      enum: ["Polygon"],
      require: true,
    },
    coordinates: {
      type: [Number],
      require: true,
    },
  },
  {
    collection: "neighborhoods",
  }
);

const Neighborhood = mongoose.model("Neighborhood", neighborhoodSchema);
module.exports = Neighborhood;
