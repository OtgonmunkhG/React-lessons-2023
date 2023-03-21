console.log("Day 80 - File Upload Multer");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { response } = require("express");
const Todo = require("./models/Todo");

const app = express();
const PORT = 8181;
const MONGO_CONNECTION_SRTING =
  "mongodb+srv://blackgerelbaatarotgonmunkh:O1234567@cluster0.blpjoju.mongodb.net/test";
app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("<h1>Day - 81: Insert Update Delete many</h1>");
});
app.get("/list", async (request, response) => {
  const result = await Todo.find({});
  response.status(200).json({
    data: result,
  });
});

app.put("/update", async (request, response) => {
  const body = request.body;
  console.log(...body);
  const result = await Todo.updateMany(
    { name: body[1].name },
    { $set: { checked: body[0].checked } }
  );
  //   const result = await Todo.updateMany(body);
  response.status(200).json({
    data: result,
  });
});

app.delete("/delete", async (request, response) => {
  const body = request.body;

  const result = await Todo.deleteMany(body);

  response.status(200).json({
    data: result,
  });
});

app.post("/create", async (request, response) => {
  const body = request.body;
  const result = await Todo.insertMany(body);
  response.status(200).json({
    data: result,
  });
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_SRTING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
