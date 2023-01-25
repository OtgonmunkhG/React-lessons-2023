console.log("Day - 50 - express server");

const { response } = require("express");
const http = require("http");
const { report } = require("process");

const PORT = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plan");
  response.end("hello world\n");
});
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
