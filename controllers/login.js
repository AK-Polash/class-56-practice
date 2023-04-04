const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const emailValidation = require("../utils/emailValidation");
const passwordValidation = require("../utils/passwordValidation");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (emailValidation(res, email)) {
    return;
  } else if (passwordValidation(res, password)) {
    return;
  } else {
    try {
      const loginUser = await User.findOne({ email: email });

      if (!loginUser) {
        return res.send({ error: "user not found" });
      }

      const result = await bcrypt.compare(password, loginUser.password);

      if (result) {
        return res.send({ message: "login success" });
      } else {
        return res.send({ error: "incorrect password" });
      }
    } catch (error) {
      return res.send({ error: "server error" });
    }
  }
};

module.exports = login;
