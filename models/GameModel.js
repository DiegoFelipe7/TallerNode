const mongoose = require("mongoose");
const SchemaCreateGame = mongoose.Schema({
  type: {
    type: String,
    require: false,
    trim: [true, "Ingresa el nombre del juego"],
  },
  gamers: [
    {
      name: {
        type: String,
        require: [true, "Ingresa el nombre del jugador"],
        trim: true,
      },
    },
  ],
  inprogress: {
    type: Boolean,
    default: false,
  },
  winner: [
    {
      id: {
        type: String,
        trim: true,
        default: "",
      },
      name: {
        type: String,
        trim: true,
        default: "",
      },
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Game", SchemaCreateGame);
