const Comment = require("../models/Comment");

const CommentController = {
  async create(req, res) {
    try {
      const comment = await Comment.create(req, res);
      res.status(201).send(comment);
    } catch (error) {
      console.error(error);
      res
        .sttaus(500)
        .send({ message: "Ha habido un problema al crear el comentario" });
    }
  },
};

module.exports = CommentController