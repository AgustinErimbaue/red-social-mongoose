const Post = require("../models/Post");

const PostController ={
    async create(req,res){
      try {
        const post = await Post.create(req.body)
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
    async getAll(req,res){
      try {
        const posts = await Post.find()
        res.send(posts)
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
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
    }
}


module.exports = PostController