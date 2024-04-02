const {Router} = require("express");

const MovieController = require("../controllers/movieController");

const movieRoutes = Router();

const movieController = new MovieController();


movieRoutes.get("/", movieController.show)

module.exports = movieRoutes