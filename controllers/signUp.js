const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const nameValidation = require("../utils/nameValidation");
const emailValidation = require("../utils/emailValidation");
const passwordValidation = require("../utils/passwordValidation");
const genderValidation = require("../utils/genderValidation");

const signUp = (req, res) => {
  const { name, email, password, gender } = req.body;

  if (nameValidation(res, name)) {
    return;
  } else if (emailValidation(res, email)) {
    return;
  } else if (passwordValidation(res, password)) {
    return;
  } else if (genderValidation(res, gender)) {
    return;
  } else {
    bcrypt.hash(password, 10, async (err, hash) => {
      const existUser = await User.find({ email: email });
      const user = new User({
        name,
        email,
        password: hash,
        gender,
      });

      if (existUser.length === 0) {
        return user
          .save()
          .then(() => res.send({ message: "registration successful!" }));
      } else {
        res.send({ error: "user already exist" });
      }
    });
  }
};

module.exports = signUp;
