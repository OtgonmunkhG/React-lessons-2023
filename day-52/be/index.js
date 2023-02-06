const express = require("express");
const cors = require("cors");
const fs = require("fs"); //file system module

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.delete("/users", (request, response) => {
  const body = request.body;
  console.log(body);
  console.log(body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not exist",
        data: [],
      });
    }

    const readObject = JSON.parse(readData);

    const filteredObject = readObject.filter((o) => o.id !== body.userId);
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(filteredObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: filteredObject,
        });
      }
    );
  });
});

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "File does not exist",
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

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = {
    id: Date.now().toString(),
    username: body.username,
    age: body.age,
  };

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }

    let dataObject = JSON.parse(readData);
    console.log(dataObject);
    dataObject.push(newUser);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.put("/users", (request, response) => {
  console.log(request.body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }

    const savedData = JSON.parse(readData);
    console.log(savedData);
    const changedData = savedData.map((d) => {
      if (d.id === request.body.id) {
        (d.username = request.body.username), (d.age = request.body.age);
      }
      return d;
    });
    console.log(changedData);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file error",
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
