console.log("Day - 82 ");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");
const adminRouter = require("./routes/admin-api");
const { response } = require("express");
const MONGO_CONNECTION_SRTING =
  "mongodb+srv://blackgerelbaatarotgonmunkh:O1234567@cluster0.blpjoju.mongodb.net/day-82";

const app = express();
const PORT = 8181;

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);
app.use("/admin", adminRouter);

app.get("/", (request, response) => {
  response.send("<h1>Day - 82 </h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_SRTING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Service is running on http://localhost:${PORT}`);
});
