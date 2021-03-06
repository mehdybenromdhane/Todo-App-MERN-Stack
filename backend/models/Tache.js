const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const tacheSchema = new Schema({
  titre: String,
  description: String,
  deadline: Date,

  date: {
    type: Date,
    default: Date.now,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("tache", tacheSchema, "tache");
