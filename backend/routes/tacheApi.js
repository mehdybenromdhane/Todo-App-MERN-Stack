var express = require("express");
var router = express.Router();
var User = require("../models/User");

var TacheController = require("../controller/tacheController");
const auth = require("../middleware/auth");

//routes CRUD taches
router.get("/:id", TacheController.getTaches);
router.post("/ajout/:id", TacheController.ajoutTache);
router.put("/modifier/:id", TacheController.modiferTache);

router.post("/remove/:idu/:id", function (req, res) {
  User.findByIdAndUpdate(
    { _id: req.params.idu },
    { $pull: { taches: req.params.id } }
  ).then((err) => {
    res.send(err);
  });
});

module.exports = router;
