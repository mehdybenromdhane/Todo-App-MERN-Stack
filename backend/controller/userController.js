var UserService = require("../services/userService");
var MailService = require("../services/mailService");

const User = require("../models/User");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

// Méthode d'inscription
let inscription = async function (req, res) {
  //charger les informations de requête
  var user = req.body;
  var { email, password } = user; //destruction
  try {
    // Validation des informations
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // Validation si l'utilisateur existe deja dans la base
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    await UserService.ajoutUser(user); //Ajout d'un utilisateur
    await MailService.sendMail(user.email); //Envoi mail à un utilisateur
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // Enregistrer token
    user.token = token;
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
    res.status(201).json(user);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Méthode de connexion

let login = async function (req, res) {
  //charger les informations de requête
  var user = req.body;
  var { email, password } = user; //destruction (email et mod de passe)

  try {
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    var user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Creation token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h", //token sera expirée aprés 2h
        }
      );

      // enregister token d'utilisateur
      user.token = token;
      res
        .cookie("token", token, {
          httpOnly: true,
        })

        .json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};

//Méthode de déconnexion
let logOut = async function (req, res) {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
};

//Vérification la connexion d'un utilisateur
let loggedIn = async function (req, res) {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.TOKEN_KEY);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
};

module.exports = { inscription, login, logOut, loggedIn };
