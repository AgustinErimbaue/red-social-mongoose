const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config();
const { JWT_SECRET } = process.env

const UserController = {
  async register(req, res,next) {
    try {
      if (!req.body.password) {
        return res.status(400).send("rellena tu contrasena ")
      }
      const password = bcrypt.hashSync(req.body.password, 10)
      const user = await User.create({ ...req.body, password })
      res.status(201).send({ message: "Usuario creado con exito", user })
    } catch (error) {
      next(error)
    }
  },
  async login(req, res) {
    try {
      const user = await User.findOne({
        email: req.body.email,
      })
      if (!user) {
        return res.status(400).send("correo o contraseña incorrectos")
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password)
      if (!isMatch) {
        return res.status(400).send("correo o contraseña incorrectos")
      }
      const token = jwt.sign({ _id: user._id }, JWT_SECRET)
      if (user.tokens.length > 4) user.tokens.shift()
      user.tokens.push(token)
      await user.save()
      res.send({ message: `Bienvenid@`, token })
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  async getUser(req, res) {
    try {
      const user = await User.findById(req.user._id)
      .populate({path: "postIds",
        populate: {
          path: "commentIds"
        }
      })
      .populate("likesList")
      res.send(user)
    } catch (error) {
      console.error(error)
      res.status(400).send({ message: "No estas logueado" })
    }
  },
  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user_id, {
        $pull: { tokens: req.headers.authorizarion },
      })
      res.send({message:"Desconectado con exito"})
    } catch (error) {
      res.status(500).send({message:"Hubo un problema al intentar desconectar al usuario"})
    }
  }
}

module.exports = UserController
