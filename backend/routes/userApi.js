const express = require("express");
const router = express.Router();
var UserController = require("../controller/userController");

//routes CRUD users
router.post("/inscription", UserController.inscription);
router.post("/login", UserController.login);

module.exports = router;
