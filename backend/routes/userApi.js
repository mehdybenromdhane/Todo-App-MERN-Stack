const express = require("express");
const router = express.Router();
var UserController = require("../controller/userController");
const User = require("../models/User");
router.use(express.json());

//routes CRUD users
router.post("/inscription", UserController.inscription);
router.post("/login", UserController.login);
router.get("/logout", UserController.logOut);
router.get("/loggedIn", UserController.loggedIn);

const students = ["Elie", "Matt", "Joel", "Michael"];

router.get("/get", (req, res) => {
  return res.json(students);
});
//route to fetch user details
router.get("/user/:id", (req, res) => {
  let idUser = req.params.id;
  User.findById(idUser).exec(function (err, taches) {
    if (err) {
      console.log("error taches");
    } else {
      res.json(taches);
    }
  });
});

module.exports = router;
