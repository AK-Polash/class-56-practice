const express = require("express");
const authRoutes = require("./authentication");
const inspectRoutes = require("./inspection");
const _ = express.Router();

_.use("/auth/", authRoutes);
_.use("/inspect/", inspectRoutes);

module.exports = _;
