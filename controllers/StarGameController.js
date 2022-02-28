/**
 * @author Diego Felipe Muñoz
 * @since 28/02/2022
 * @version 1.0.0
 */
const GameModel = require("../models/GameModel");
/**
 * @description este metodo nos direcciona a la pagina stargame
 */
exports.getGame = (req, res, next) => {
  try {
    res.status(201).render("starGame.pug", {});
  } catch (error) {
    console.log(error);
    next(error);
  }
};
/**
 * @description Realizamos la busqueda del juego y posterior mente le asignamos el puntaje a los juagores
 */
exports.PlayersScore = (req, res) => {
  const { id, gamers } = req.body;
  GameModel.findById(id)
    .then((PlayerResult) => {
      let game = {
        id: PlayerResult.id,
        gamers: [
          {
            id: PlayerResult.gamers[0].id,
            score: gamers[0],
          },
          {
            id: PlayerResult.gamers[1].id,
            score: gamers[1],
          },
          {
            id: PlayerResult.gamers[2].id,
            score: gamers[2],
          },
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
