const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/Todo";

mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.log("Connected to mongodb");
  }
});
