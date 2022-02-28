const express = require("express");
const router = express.Router();
const GameController = require("../controllers/GameController");

/* GET home page. */
router.get("/", GameController.gameRegistration);
router.post("/createGame", GameController.saveGame);
module.exports = router;
