const {default:mongoose, Types }= require("mongoose")
const ObjectId = mongoose.SchemaTypes.ObjectId

const CommentSchema = new mongoose.Schema(
  {
    username: String,
    body: String,
    userId: Types.ObjectId,
    postId: Types.ObjectId

  },
  { timestamps: true }
)
const Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment