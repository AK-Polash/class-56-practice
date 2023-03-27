const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(
      "mongodb+srv://akPolash:akPolash@cluster0.roa7d6k.mongodb.net/class-56-practice?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"));
};

module.exports = database;
