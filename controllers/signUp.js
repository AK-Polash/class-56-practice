const User = require("../models/userModel");
const nameValidation = require("../utils/nameValidation");
const emailValidation = require("../utils/emailValidation");
const passwordValidation = require("../utils/passwordValidation");
const genderValidation = require("../utils/genderValidation");
const bcrypt = require("bcrypt");

const signUp = (req, res) => {
  const { name, email, password, gender } = req.body;
  const user = new User({
    name,
    email,
    password,
    gender,
  });

  if (nameValidation(res, name)) {
    return;
  } else if (emailValidation(res, email)) {
    return;
  } else if (passwordValidation(res, password)) {
    return;
  } else if (genderValidation(res, gender)) {
    return;
  } else {
    bcrypt.hash(password, 15, async (err, hash) => {
      user.password = hash;

      const existUser = await User.find({ email: email });
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
