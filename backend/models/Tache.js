const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const tacheSchema = new Schema({
  titre: String,
  description: String,
  deadline: String,

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("tache", tacheSchema, "tache");
