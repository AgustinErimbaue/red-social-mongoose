const { default: mongoose, Types } = require("mongoose")
const ObjectId = mongoose.SchemaTypes.ObjectId;



const PostSchema = new mongoose.Schema(
  {
    username: String,
    body: String,
    userId: Types.ObjectId,
    commentIds:[{type:ObjectId, ref: "Comment"}]
  },
  { timestamps: true }
)

const Post = mongoose.model("Post", PostSchema)

module.exports = Post
