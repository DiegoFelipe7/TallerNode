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
      PlayerResult.inprogress = false;
      PlayerResult.gamers[0].score = gamers[0];
      PlayerResult.gamers[1].score = gamers[1];
      PlayerResult.gamers[2].score = gamers[2];
      PlayerResult.save()
        .then((resul) => {
          let game = {
            id: resul.id,
            gamers: [
              {
                id: resul.gamers[0].id,
                score: resul.gamers[0].score,
              },
              {
                id: resul.gamers[1].id,
                score: resul.gamers[1].score,
              },
              {
                id: resul.gamers[2].id,
                score: resul.gamers[2].score,
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
    })
    .catch((err) => {
      res.status(404).json({
        error: err.message,
        message: "Ocurrio un error",
      });
    });
};
