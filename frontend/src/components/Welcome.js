import React, { useContext, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import AuthContext from "../context/authContext";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Welcome() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const { loggedIn } = useContext(AuthContext);
  useEffect(() => {
    let id = localStorage.getItem("id");

    axios
      .get("http://localhost:5000/auth/user/" + id)
      .then((response) => setEmail(response.data.email));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Bienvenu {email}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Une application MERN Todo avec ajout, liste, suppression et
              confirmation de tâches
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                {!loggedIn && (
                  <>
                    <Grid item>
                      {" "}
                      <Button variant="contained" color="primary">
                        <Link
                          to="/login"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Connexion{" "}
                        </Link>
                      </Button>{" "}
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        <Link
                          to="/register"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Inscription
                        </Link>
                      </Button>
                    </Grid>
                  </>
                )}
                {loggedIn && (
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Link
                        to="/todo"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Mes Taches{" "}
                      </Link>
                    </Button>{" "}
                  </Grid>
                )}
              </Grid>
            </div>
          </Container>
        </div>
      </main>

      {/* End footer */}
    </React.Fragment>
  );
}
