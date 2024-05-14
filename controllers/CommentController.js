const Comment = require("../models/Comment");
const Post = require("../models/Post");

const CommentController = {
  async create(req, res) {
    try {
      const comment = await Post.findByIdAndUpdate(
        req.params._id,
        { $push: { commentIds: { comment:req.body.comment, userId: req.user._id } } },
        { new: true }
      );

      res.status(201).send(comment);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el comentario" });
    }
  },
};

module.exports = CommentController
