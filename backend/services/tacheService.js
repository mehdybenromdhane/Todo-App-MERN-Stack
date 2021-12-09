var Tache = require("../models/Tache");
var User = require("../models/User");

let getTaches = async function (taches, id) {
  try {
    var taches = User.findById(id)
      .populate({
        path: "taches",
      })
      .select("taches")

      .exec();
    return taches;
  } catch (e) {
    // Log Errors
    throw Error("Error while geting taches");
  }
};

let ajoutTache = async function (data, idUser) {
  const { titre, description, deadline } = data;
  const tache = await Tache.create({
    titre,
    description,
    deadline,
  });
  await tache.save();

  const userById = await User.findById(idUser);

  userById.taches.push(tache);

  await userById.save();
  console.log("tache add");
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
