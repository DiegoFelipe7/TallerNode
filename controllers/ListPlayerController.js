const GameModel = require("../models/GameModel");
exports.getUser = (req, res, next) => {
  try {
    res.status(200).render("Game.pug", {});
  } catch (error) {
    next(error);
    console.log(error);
  }
};
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
exports.winner = (req, res) => {
  GameModel.findById(req.params.id).then((winnerResult) => {
    const winner = {
      winner: {
        id: winnerResult.gamers[1].id,
        name: winnerResult.gamers[2].name,
      },
    };
    res.status(201).json(winner);
  });
};
