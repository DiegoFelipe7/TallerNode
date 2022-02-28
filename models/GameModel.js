const mongoose = require("mongoose");
const SchemaCreateGame = mongoose.Schema({
  type: {
    type: String,
    require: false,
    trim: true,
  },
  gamers: [
    {
      name: {
        type: String,
        require: true,
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
});
module.exports = mongoose.model("Game", SchemaCreateGame);
