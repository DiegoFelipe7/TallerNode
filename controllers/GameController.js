const GameModel = require("../models/GameModel");
const { v4: uuidv4 } = require("uuid");
exports.gameRegistration = (req, res, next) => {
  try {
    res.status(200).render("createGame.pug", {});
  } catch (error) {
    next(error);
    console.log(error);
  }
};

exports.saveGame = (req, res) => {
  const Adgame = new GameModel({
    type: req.body.type,
    gamers: [
      {
        name: req.body.gamers[0],
      },
      {
        name: req.body.gamers[1],
      },
      {
        name: req.body.gamers[2],
      },
    ],
  });
  Adgame.save()
    .then((GameResult) => {
      const game = {
        _id: GameResult._id,
        type: GameResult.type,
        gamers: GameResult.gamers,
      };
      res.status(201).json(game);
    })
    .catch((err) => {
      res.status(404).json({
        error: err.message,
        message: "Ocurrio un error",
      });
    });
};
