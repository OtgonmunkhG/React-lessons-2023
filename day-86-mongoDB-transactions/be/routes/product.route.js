const express = require("express");

const { createProduct } = require("../controllers/product.controller");

const route = express.Router();

route.post("/create", createProduct);

module.exports = route;
