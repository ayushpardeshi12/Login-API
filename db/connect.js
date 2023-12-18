const mongoose = require("mongoose");

const dbConnect = mongoose
  .connect("mongodb://127.0.0.1:27017/login-api")
  .then(() => {
    console.log("Successfully Connected To Database");
  })
  .catch((error) => {
    console.log(`Error Connecting to the database : ${error}`);
  });

module.exports = dbConnect;
