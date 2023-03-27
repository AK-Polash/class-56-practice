const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const database = require("./config/database");
const _ = require("./routes");
const app = express();

app.use(express.json());

database();

app.use(_);

app.listen(8000, () => {
  console.log("PORT IS RUNNING");
});
