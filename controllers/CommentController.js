const Comment = require("../models/Comment");
const Post = require("../models/Post");

const CommentController = {
  async create(req, res) {
    try {
      const comment = await Comment.create({
        ...req.body,
        userId: req.user._id,
      });
      await Post.findByIdAndUpdate(
        req.params._id,
        { $push: { commentIds: comment._id } },
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

  async update(req, res) {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id },
        {
          new: true,
        }
      );
      res
        .status(201)
        .send({ msg: "Comentario actualizado correctamente", comment });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteById(req, res) {
    try {
      const comment = await Comment.findByIdAndDelete(req.params._id, {...req.body, userId:req.user._id});
      res.send({ msg: "Comentario borrado exitosamente" },comment);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};

module.exports = CommentController;
