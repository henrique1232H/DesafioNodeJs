const {Router} = require("express");

const UserController = require("../controllers/userController");

const userRoutes = Router();

const userController = new UserController();


userRoutes.get("/",userController.show)

module.exports = userRoutes