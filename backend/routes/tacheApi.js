var express = require("express");
var router = express.Router();

var TacheController = require("../controller/tacheController");

//routes CRUD
router.get("/", TacheController.getTaches);
router.post("/ajout", TacheController.ajoutTache);
router.put("/modifier/:id", TacheController.modiferTache);
router.delete("/supprimer/:id", TacheController.supprimerTache);

module.exports = router;
