# It is User.js file in the patient monistoring system
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.model("User", UserSchema);
