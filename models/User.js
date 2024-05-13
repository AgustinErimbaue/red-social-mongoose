const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    role: "user",
    PostIds: [],
  },
  { timestamps: true }
);
const User = mongoose.model("User", PostSchema);
module.exports = User;
