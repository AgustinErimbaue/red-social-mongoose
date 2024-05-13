const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ _id: payload._id, tokens });
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

module.exports = { authentication };
