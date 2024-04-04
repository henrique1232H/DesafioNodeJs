const {Router} = require("express");

const UserController = require("../controllers/userController");

const userRoutes = Router();

const userController = new UserController();


userRoutes.post("/",userController.createUser);
userRoutes.delete("/:id", userController.deleteUser)

module.exports = userRoutes