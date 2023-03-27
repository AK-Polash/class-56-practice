const User = require("../models/userModel");

const allUsers = async (req, res) => {
  const users = await User.find({}).select({ password: 0 });
  res.send(users);
};

module.exports = allUsers;
