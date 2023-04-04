const passwordPattern = /^\S+$/;

const passwordValidation = (res, password) => {
  if (!password) {
    res.send({ error: "password required" });
    return true;
  } else if (!passwordPattern.test(password)) {
    res.send({ error: "password can't be empty" });
    return true;
  } else {
    return false;
  }
};

module.exports = passwordValidation;
