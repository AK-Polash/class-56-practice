const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  verified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", user);
