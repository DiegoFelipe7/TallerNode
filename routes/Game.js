/**
 * @author Diego Felipe Muñoz
 * @since 28/02/2022
 * @version 1.0.0
 */
const express = require("express");
const router = express.Router();
const GameController = require("../controllers/GameController");
/**
 * @description GET /createGame
 * Nos direcciona a ala vista de crear juego donde se registrar los usuario
 */
router.get("/", GameController.gameRegistration);
/**
 * @description POST /createGame
 * @returns {object} obtiene un objteo de tipo json con los datos de los usuarios como el juego y sus players
 */
router.post("/createGame", GameController.saveGame);
module.exports = router;
