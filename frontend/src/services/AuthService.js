import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../context/authContext";
import { useHistory } from "react-router-dom";

async function Connexion(loginData) {
  await axios
    .post("http://localhost:5000/auth/login", loginData)
    .then((response) => console.log("id", response.data));
}

async function SignUp(registerData) {
  await axios
    .post("http://localhost:5000/auth/inscription", registerData)
    .then((response) => console.log("id", response.data));
}

export default Connexion;
