console.log("Day 80 - File Upload Multer");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todo-routes");
const categoryRouter = require("./routes/category-routes");

const app = express();
const PORT = 8181;
const MONGO_CONNECTION_SRTING =
  "mongodb+srv://blackgerelbaatarotgonmunkh:O1234567@cluster0.blpjoju.mongodb.net/test";

app.use(express.json());
app.use(cors());
app.use("/todo", todoRouter);
app.use("/category", categoryRouter);

app.get("/", (request, response) => {
  response.send("<h1>Day - 81: Insert Update Delete many</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_SRTING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
