import axios from "axios";
import React, { useState } from "react";

export default async function AjoutTache(tacheData, id) {
  await axios
    .post("http://localhost:5000/tache/ajout/" + id, tacheData)
    .then((response) => console.log("id", response.data));
}

export { AjoutTache };
