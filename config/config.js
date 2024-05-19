const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URI } = process.env



const dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    return "Conexión a la base de datos establecida correctamente";
  } catch (error) {
    console.error(error);
    throw new Error("Error al intentar conectar con la base de datos");
  }
};

module.exports = { dbConnection };