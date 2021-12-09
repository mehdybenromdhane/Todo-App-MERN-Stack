var TacheService = require("../services/tacheService");

// Méthode d'avoir les tâches
let getTaches = async function (req, res) {
  userId = req.params.id;
  try {
    var taches = await TacheService.getTaches({}, userId);
    return res.status(200).json({
      status: 200,
      data: taches,
      message: "Succesfully Taches Retrieved",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Méthode d'ajout d'une tâche
let ajoutTache = async function (req, res) {
  console.log("ajout d'un nouveau tache");
  var data = req.body;
  var id = req.params.id;
  try {
    var taches = await TacheService.ajoutTache(data, id);
    return res.status(200).json({
      status: 200,
      data: taches,
      message: "Succesfully Taches added ",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Méthode de modification d'une tâche
let modiferTache = async function (req, res) {
  var tache = req.body;
  console.log(tache);
  var id = req.params.id;
  try {
    var taches = await TacheService.modifierTache(tache, id);
    return res.status(200).json({
      status: 200,
      data: taches,
      message: "Succesfully Taches updated",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Méthode de suppression d'une tâche
let supprimerTache = async function (req, res) {
  var id = req.params.id; //prend id à partir d'URL
  console.log(id);
  try {
    var taches = TacheService.supprimerTache(id);
    return res.status(200).json({
      status: 200,
      data: taches,
      message: "Succesfully Taches deleted",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// exportation des fonctions
module.exports = { getTaches, ajoutTache, modiferTache, supprimerTache };
