const { Router } = require("express");
const { getNeighborhoods } = require("../controllers/neighborhood.controller");

const route = Router();

route.get("/neighborhood/list", getNeighborhoods);

module.exports = route;
