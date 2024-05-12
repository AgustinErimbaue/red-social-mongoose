const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    username: String,
    Body: string,
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment
