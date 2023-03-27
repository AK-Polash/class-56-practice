const express = require("express");
const apiRoutes = require("./api");
const _ = express.Router();

const api = process.env.BASE_URL;

_.use(api, apiRoutes);

module.exports = _;
