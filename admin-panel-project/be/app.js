console.log("it's my app.js");
//import necessary module

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { response } = require("express");
const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

app.post("/users", (requist, response) => {
  const body = requist.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }
  });

  const objectData = JSON.parse(readData);

  response.json({
    status: "success",
    data: objectData,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
