console.log("Day - 82 ");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const restaurantApi = require("./routes/restaurants.routes");
const neighborhoodApi = require("./routes/neighborhoods.routes");

require("dotenv").config();
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/restaurant", restaurantApi);
app.use("/neighborhood", neighborhoodApi);

app.get("/", (request, response) => {
  response.send("<h1>Day - 82 </h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Service is running on http://localhost:${PORT}`);
});
