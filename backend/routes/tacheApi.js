var express = require("express");
var router = express.Router();

var TacheController = require("../controller/tacheController");
const auth = require("../middleware/auth");

//routes CRUD taches
router.get("/", auth, TacheController.getTaches);
router.post("/ajout", TacheController.ajoutTache);
router.put("/modifier/:id", TacheController.modiferTache);
router.delete("/supprimer/:id", TacheController.supprimerTache);

module.exports = router;
