console.log("day-51 : API Express js");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    name: "Otgoo",
    major: "computer science",
  },
];
app.get("/", (request, response) => {
  response.send("Here im a brutally powerfull express server");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.post("/data", (request, response) => {
  console.log(request.body);
  const length = data.length;
  const requestData = {
    id: length + 1,
    name: request.body.name,
    major: request.body.major,
  };
  data = [...data, requestData];
  response.json(data);
});
app.delete("/data", (request, response) => {
  const deleteData = data.filter((d) => d.id !== request.body.id);
  data = deleteData;

  response.json(data);
});
app.put("/data", (request, response) => {
  const found = data.filter((n) => n.id !== request.body.id);
  console.log(found);
  console.log(request.body);
  console.log(data);

  const newData = data.map((d) => {
    if (d.id === request.body.id) {
      (d.name = request.body.name), (d.major = request.body.major);
    }
    return d;
  });
  data = newData;

  response.json(data);
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
