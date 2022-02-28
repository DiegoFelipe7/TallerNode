/**
 * Conexion a mongo
 * @author Diego Felipe Muñoz
 * @since 28/02/2022
 * @version 1.0.0
 */
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });
const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("conectado a mongooo");
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
};
module.exports = conectarDB;
