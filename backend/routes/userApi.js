const express = require("express");
const router = express.Router();
var UserController = require("../controller/userController");
const jwt = require("jsonwebtoken");

//routes CRUD users
router.post("/inscription", UserController.inscription);
router.post("/login", UserController.login);
router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.TOKEN_KEY);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});
module.exports = router;
