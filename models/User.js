const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    age: Number,
    role: "user",
    tokens: [],
    postIds: [{ type: ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
