const nameValidation = (res, name) => {
  const namePattern = /^[a-zA-Z][a-zA-Z0-9\s]*$/;

  if (!name) {
    res.json({ error: "username required" });
    return true;
  } else if (!namePattern.test(name)) {
    res.json({ error: "valid username required" });
    return true;
  } else if (name.length < 3 || name.length > 30) {
    res.json({ error: "username must be between 3 to 20 char" });
    return true;
  }
};

module.exports = nameValidation;
