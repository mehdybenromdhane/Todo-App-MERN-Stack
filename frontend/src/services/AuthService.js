import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../context/authContext";
import { useHistory } from "react-router-dom";

export default async function Connexion(loginData) {
  await axios
    .post("http://localhost:5000/auth/login", loginData)
    .then((response) => localStorage.setItem("id", response.data._id));
}

async function SignUp(registerData) {
  await axios
    .post("http://localhost:5000/auth/inscription", registerData)
    .then((response) => localStorage.setItem("id", response.data._id));
}

export { SignUp, Connexion };
