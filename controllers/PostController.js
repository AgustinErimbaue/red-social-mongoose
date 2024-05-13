const Post = require("../models/Post")
const User = require("../models/User")

const PostController ={
    async create(req,res){
      try {
        const post = await Post.create({...req.body, 
          userId: req.user._id
        })
        await User.findByIdAndUpdate(req.user._id, {$push: {postIds:post._id}})
        res.status(201).send(post)
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
      }
    },
    async update(req,res){
      try {
        const post = await Post.findByIdAndUpdate(req.params._id, req.body, {new:true})
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
          .limit(limit)
          .skip((page - 1) * limit);
        res.send(posts);
      } catch (error) {
        console.error(error);
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
        const post = await Post.findByIdAndDelete(req.params._id)
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
    }  
}

console.log("hola");

module.exports = PostController