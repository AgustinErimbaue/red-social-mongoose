const Comment = require("../models/Comment");

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
  //falta hacer que el comentario recoja el id de la persona que lo hace
  async update(req, res) {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params._id,req.body,
        {
          new: true,
        }
      );
      res.status(201).send({ msg: "Post actualizado correctamente", comment });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};

module.exports = CommentController;
