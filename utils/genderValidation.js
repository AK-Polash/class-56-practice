const genderValidation = (res, gender) => {
  const genderPattern = /^\s*$/;

  if (!gender) {
    res.send({ error: "select your gender" });
    return true;
  } else if (genderPattern.test(gender)) {
    res.send({ error: "gender can't be empty" });
    return true;
  } else {
    return false;
  }
};

module.exports = genderValidation;
