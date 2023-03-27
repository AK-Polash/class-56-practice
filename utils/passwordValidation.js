const passwordPattern = /^.{8,}$/;

const passwordValidation = (res, password) => {
  if (!password) {
    res.send({ error: "password required" });
    return true;
  } else if (!passwordPattern.test(password)) {
    res.send({ error: "at lest 8 char required" });
    return true;
  }
};

module.exports = passwordValidation;
