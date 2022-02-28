/**
 * @author Diego Felipe Muñoz
 * @since 28/02/2022
 * @version 1.0.0
 */
const express = require("express");
const router = express.Router();
const starGameController = require("../controllers/StarGameController");
/**
 * @description GET /starGame
 * Nos direcciona a ala vista de starGame  donde se registrar el puntaje de los usuarios
 */
router.get("/", starGameController.getGame);
/**
 * @description POST /
 * Registra el puntaje de lo usuarios
 */
router.post("/", starGameController.PlayersScore);
module.exports = router;
