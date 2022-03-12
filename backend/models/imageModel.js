const mongoose = require("../connection");

const schema = mongoose.Schema({
  title: { type: String, require: true },
  file: String,
  description : String,
  created: { type: Date, default: new Date() },
  author : { type: mongoose.Types.ObjectId, ref: "users" },

}
);

const model = mongoose.model("images", schema);

module.exports = model;