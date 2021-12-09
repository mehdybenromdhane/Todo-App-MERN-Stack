const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: { type: String, required: true },

  password: { type: String, required: true },

  date: {
    type: Date,
    default: Date.now,
  },
  token: String,

  taches: [
    {
      type: Schema.Types.ObjectId,
      ref: "tache",
    },
  ],
});

module.exports = mongoose.model("user", userSchema, "user");
