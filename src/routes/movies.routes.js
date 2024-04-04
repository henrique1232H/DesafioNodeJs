const {Router} = require("express");

const MovieController = require("../controllers/movieController");

const movieRoutes = Router();

const movieController = new MovieController();


movieRoutes.post("/:user_id", movieController.createMovie)

module.exports = movieRoutes