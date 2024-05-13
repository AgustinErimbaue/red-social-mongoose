const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

const UserController = {
  async register(req, res) {
    try {
      const password = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({...req.body,password});
      res.status(201).send({ message: "Usuario creado con exito", user });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = UserController;
