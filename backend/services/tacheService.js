var Tache = require("../models/Tache");

let getTaches = async function (taches) {
  try {
    var taches = await Tache.find(taches);
    return taches;
  } catch (e) {
    // Log Errors
    throw Error("Error while geting taches");
  }
};

let ajoutTache = async function (tache) {
  var newTache = new Tache();
  newTache.titre = tache.titre;
  newTache.description = tache.description;
  newTache.deadline = tache.deadline;
  newTache.save();
};

let modifierTache = async function (tache, id) {
  Tache.findByIdAndUpdate(
    id,
    {
      $set: {
        titre: tache.titre,
        description: tache.description,
        deadline: tache.deadline,
      },
    },
    { new: true }
  ).exec();
};

let supprimerTache = async function (id) {
  Tache.findByIdAndDelete(id).exec();
};
module.exports = { getTaches, ajoutTache, modifierTache, supprimerTache };
