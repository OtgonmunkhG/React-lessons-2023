console.log("Day - 69");
import express from "express";
import cors from "cors";
import apiRouter from "./rootes/api";
import admin from "./rootes/admin.js";
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/admin", admin);
app.use("/api", apiRouter);

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align: center; background-color: orange'>Day-69</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});
