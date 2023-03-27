const express = require("express");
const sells = require("../../controllers/sells");
const products = require("../../controllers/products");
const _ = express.Router();

_.get("/sells", sells);
_.get("/products", products);

module.exports = _;
