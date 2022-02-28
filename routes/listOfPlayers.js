const express = require("express");
const router = express.Router();
const ListPlayerController = require("../controllers/ListPlayerController");
router.get("/", ListPlayerController.getUser);
router.get("/:id", ListPlayerController.getGames);
router.get("/:id/winner", ListPlayerController.winner);
module.exports = router;
