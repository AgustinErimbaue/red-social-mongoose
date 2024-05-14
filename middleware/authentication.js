const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ _id: payload._id, tokens: token });
    if (!user) {
      return res.status(401).send({ message: "No estas autorizado" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error, message: "Ha habido un problema con el token" });
  }
};

const isAuthor = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params._id);
    if (post.userId.toString() !== req.user._id.toString()) {
      return res.status(403).send({ message: "Esta publicación no es tuya" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({
        error,
        message: "Ha habido un problema al comprobar la autoría del pedido",
      });
  }
};

const isAuthorComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params._id);
    if (comment.userId.toString() !== req.user._id.toString()) {
      return res.status(403).send({ message: "Este comentario no es tuyo" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({
        error,
        message: "Ha habido un problema al comprobar la autoría del comentario",
      });
  }
};

module.exports = { authentication, isAuthor, isAuthorComment };
