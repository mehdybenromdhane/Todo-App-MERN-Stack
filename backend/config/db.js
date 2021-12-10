const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

mongoose.Promise = global.Promise;

function connect() {
  mongoose.connect(MONGO_URI, (err) => {
    if (err) {
      console.error("Error!" + err);
    } else {
      console.log("Connected to mongodb");
    }
  });
}

module.exports = { connect };
