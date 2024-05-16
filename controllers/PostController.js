const Post = require("../models/Post");
const User = require("../models/User");

const PostController = {
  async create(req, res) {
    try {
      const post = await Post.create({ ...req.body, author: req.user._id });
      await User.findByIdAndUpdate(req.user._id, {
        $push: { postIds: post._id },
      });
      res.status(201).send(post);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
    async update(req,res){
      try {
        const post = await Post.findByIdAndUpdate(req.params._id, {...req.body,author:req.user._id}, {new:true})
        res.send({msg:"Post actualizado correctamente", post})
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
    },
    async getAll(req, res) {
      try {
        const { page = 1, limit = 10 } = req.query;
        const posts = await Post.find()
        .populate({
          path: 'commentIds'})
          .limit(parseInt(limit))
          .skip((page - 1) * parseInt(limit))
  
        res.send(posts);
      } catch (error) {
        console.error(error);
        res.status(500).send(error);
      }
    },
    async getById(req,res){
      try {
        const post = await Post.findById(req.params._id)
        res.send(post)
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
    },
    async deleteById(req,res){
      try {
        const post = await Post.findByIdAndDelete(req.params._id, {...req.body,author:req.user._id})
        res.send({msg:"Publicación borrada exitosamente", post})
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
    },
    async getPostByUserName(req, res) {
      try {
        if (req.params.username.length>20){
          return res.status(400).send('Búsqueda demasiado larga')
        }
        const userName = new RegExp(req.params.username, "i")
        const posts = await Post.find({userName})
        res.send(posts)
      } catch (error) {
        console.log(error)
      }
    },
    async like(req,res){
      try {
        const post = await Post.findByIdAndUpdate(
          req.params._id,
          {$push:{likes:req.user._id}},
          {new:true}
        )
        await User.findByIdAndUpdate(
          req.user._id,
          { $push: { likesList: req.params._id } },
          { new: true }
        )  
        res.send({msg:"Has añadido un like a este post", post})
      } catch (error) {
        console.error(error)
        res.status(500).send({msg: "Hubo un problema al dar like"})
      }
    },
    async removeLike(req,res){
      try {
        const like = await Post.findByIdAndDelete(
          req.params._id,
          {$pull:{likesList:req.user._id}},
          {new:true}
        )
        res.send({msg:"Has quitado un like a este post", like})

      } catch (error) {
        console.error(error)
        res.status(500).send({msg: "Hubo un problema al quitar el like"})
      }
    }  
};

module.exports = PostController;
