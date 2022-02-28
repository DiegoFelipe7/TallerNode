const express = require("express");
const router = express.Router();
const starGameController = require("../controllers/StarGameController");
router.get("/", starGameController.getGame);
router.post("/", starGameController.PlayersScore);
module.exports = router;
