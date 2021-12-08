const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: { type: String, required: true },
  motDePasse: String,

  passHash: { type: String, required: true },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", userSchema, "user");
