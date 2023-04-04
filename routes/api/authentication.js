const express = require("express");
const signUp = require("../../controllers/signUp");
const login = require("../../controllers/login");
const allUsers = require("../../controllers/allUsers");
const _ = express.Router();

_.post("/signup", signUp);
_.post("/login", login);
_.get("/users", allUsers);

module.exports = _;
