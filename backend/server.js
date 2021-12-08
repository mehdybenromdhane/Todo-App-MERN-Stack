const express = require("express");
const bodyParser = require("body-parser");
var cookies = require("cookie-parser");
require("dotenv").config();
const { PORT } = process.env;

const database = require("./config/db");
const cors = require("cors");
const app = express();
const userApi = require("./routes/userApi");
const tacheApi = require("./routes/tacheApi");

app.use(cookies());

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/auth", userApi);
app.use("/tache", tacheApi);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello from server");
});
app.listen(PORT, function () {
  console.log("server running on localhost:" + PORT);
});
