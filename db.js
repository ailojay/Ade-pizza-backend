const mongoose = require("mongoose");

var mongoURL = "mongodb://127.0.0.1:27017/Ade-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection successfull");
});

db.on("error", () => {
  console.log("Mongo DB Connection failed");
});

module.exports = mongoose;
