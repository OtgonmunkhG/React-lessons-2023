console.log("DAY-69 DATABASE rout");

import express, { response, Router } from "express";
import emp_router from "./rootes/admin.js";
import admin from "./rootes/api.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use("/admin", admin) ;
app.use("/api", emp_router);

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align:center; background-color: orange'>Day -69</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`EXPRESS app is running on http://localhost:${PORT}`);
});
