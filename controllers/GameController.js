/**
 * @author Diego Felipe Muñoz
 * @since 28/02/2022
 * @version 1.0.0
 */
const GameModel = require("../models/GameModel");
const { v4: uuidv4 } = require("uuid");
/**
 * @description este metodo nos direcciona a la pagina createGame
 */
exports.gameRegistration = (req, res, next) => {
  try {
    res.status(200).render("createGame.pug", {});
  } catch (error) {
    next(error);
    console.log(error);
  }
};
/**
 * @description Realizamos el registro de lo usuarios con el nombre del juego y sus respectivos jugadores
 */
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
        gamers: [
          { name: GameResult.gamers[0].name },
          { name: GameResult.gamers[1].name },
          { name: GameResult.gamers[2].name },
        ],
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
