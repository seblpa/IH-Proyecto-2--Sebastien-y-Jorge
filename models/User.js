const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  //facebookID: String,
  email: String,
  description: String, //opcional, posibilidad de definirse.
  instrument: String, //guitarrista, batería,...
  experience: String, // String o desplegable.
  // available: String, yes or no.
  imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=Ironfunding&w=250&h=250" }
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;