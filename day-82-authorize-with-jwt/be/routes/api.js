const auth = require("../middleware/auth");
const express = require("express");

const apiRouter = express.Router();

apiRouter.post("/protected", auth, (request, response, next) => {
  response.status(200).json({
    data: "successfully got the protected route",
  });
});

apiRouter.post("/unprotected", (request, response) => {
  response.status(200).json({
    data: "successfully got the unprotected route",
  });
});

module.exports = apiRouter;
