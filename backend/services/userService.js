var User = require("../models/User");
const bcrypt = require("bcryptjs");
let ajoutUser = async function (user) {
  //cryptage de mot de passe
  encryptedPassword = await bcrypt.hash(user.password, 10);

  // Ajout d'un utilisateur dans la base de donnée
  await User.create({
    email: user.email.toLowerCase(), //conversion de mail en minuscule
    password: encryptedPassword,
  });
};

module.exports = { ajoutUser };
