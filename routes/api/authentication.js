const express = require("express");
const signUp = require("../../controllers/signUp");
const allUsers = require("../../controllers/allUsers");
const _ = express.Router();

_.post("/signup", signUp);
_.get("/users", allUsers);

module.exports = _;
