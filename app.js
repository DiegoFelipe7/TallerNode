const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const conectarDB = require("./config/db");
//Rutas de aplicativo
const game = require("./routes/Game");
const listplayer = require("./routes/listOfPlayers");
const starGame = require("./routes/StarGame");
const app = express();

conectarDB();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", "./views");
app.set("views engine", "pug");

app.use("/", game);
app.use("/game", listplayer);
app.use("/starGame", starGame);
module.exports = app;
