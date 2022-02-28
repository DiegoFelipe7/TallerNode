/**
 * @author Diego Felipe Muñoz
 * @since 28/02/2022
 * @version 1.0.0
 */
const GameModel = require("../models/GameModel");
/**
 * @description este metodo nos direcciona a la pagina game
 */
exports.getUser = (req, res, next) => {
  try {
    res.status(200).render("Game.pug", {});
  } catch (error) {
    next(error);
    console.log(error);
  }
};
/**
 * @description Realizamos la busqueda de un juego por el id
 */
exports.getGames = (req, res) => {
  GameModel.findById(req.params.id)
    .then((UserResult) => {
      if (UserResult.inprogress === true) {
        let game = {
          _id: UserResult._id,
          name: UserResult.name,
          gamers: UserResult.gamers,
          inprogress: UserResult.inprogress,
        };
        res.status(201).json(game);
      } else {
        let game = {
          _id: UserResult._id,
          name: UserResult.name,
          gamers: UserResult.gamers,
          inprogress: UserResult.inprogress,
          winner: UserResult.winner,
        };
        res.status(201).json(game);
      }
    })
    .catch((err) => {
      res.status(404).json({
        error: err.message,
        message: "Ocurrio un error",
      });
    });
};
/**
 * @description Realizamos la busqueda de un juego por el id y determinamos el ganador
 */
exports.winner = (req, res) => {
  GameModel.findById(req.params.id).then((winnerResult) => {
    const winner = {
      winner: {
        id: winnerResult.gamers[1].id,
        name: winnerResult.gamers[1].name,
      },
    };
    res.status(201).json(winner);
  });
};
