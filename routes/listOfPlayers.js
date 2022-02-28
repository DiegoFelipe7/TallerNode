/**
 * @author Diego Felipe Muñoz
 * @since 28/02/2022
 * @version 1.0.0
 */
const express = require("express");
const router = express.Router();
const ListPlayerController = require("../controllers/ListPlayerController");
/**
 * @description GET /game
 * Nos direcciona a ala vista de game
 */
router.get("/", ListPlayerController.getUser);
/**
 * @description POST /createGame
 * @returns {object} obtiene un objeto de tipo json con los datos de los usuarios como el juego y sus players
 */
router.get("/:id", ListPlayerController.getGames);
/**
 * @description POST /createGame
 * @returns {object} obtiene un objeto de tipo json con el ganador del juego
 */
router.get("/:id/winner", ListPlayerController.winner);
module.exports = router;
