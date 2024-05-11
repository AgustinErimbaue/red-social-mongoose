const Post = require("../models/Post")

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


module.exports = PostController