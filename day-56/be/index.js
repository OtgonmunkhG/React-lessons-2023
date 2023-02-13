console.log("Day-56 REST API");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.delete("/timers", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }
    const dataObject = JSON.parse(readData);
    const filterObject = dataObject.filter((d) => d.id !== body.timerId);
    console.log(filterObject);
    console.log(dataObject);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(filterObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filterObject,
        });
      }
    );
  });
});

app.put("/timers", (request, response) => {
  console.log(request.body);
  const body = request.body;
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }

    const savedData = JSON.parse(readData);
    const changedData = savedData.map((c) => {
      if (c.id === body.timerId.id) {
        (c.title = body.timerId.title), (c.project = body.timerId.project);
      }
      return c;
    });
    console.log(changedData);
    fs.writeFile(
      "./data/data.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.post("/timers", (request, response) => {
  const body = request.body;

  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }
    const objectData = JSON.parse(readData);
    objectData.push(body);

    fs.writeFile(
      "./data/data.json",
      JSON.stringify(objectData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: objectData,
        });
      }
    );
  });
});

app.get("/", (request, response) => {
  response.send("<h1>Express REST API is running </h1>");
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);
    console.log(timerData);

    response.json({
      status: "success",
      data: timerData,
    });
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
