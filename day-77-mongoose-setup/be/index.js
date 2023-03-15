console.log("Day - 77");

const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");

const PORT = 8080;
const MONGO_CONNECTION_SRTING =
  "mongodb+srv://blackgerelbaatarotgonmunkh:O1234567@cluster0.blpjoju.mongodb.net/test";

const app = express();
app.use(express.json());
app.use(apiRouter);

mongoose
  .connect(MONGO_CONNECTION_SRTING)
  .then(() => console.log("Database connected successfuly"))
  .catch((error) => console.log(error));

app.get("/", (request, response) => {
  response.send("<h1>Day - 77 Mongoose Application</h1>");
});
app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
