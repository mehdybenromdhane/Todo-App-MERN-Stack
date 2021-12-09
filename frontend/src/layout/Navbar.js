import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);

  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    history.push("/");
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link
              className={classes.title}
              style={{ textDecoration: "none", color: "white" }}
              to="/"
            >
              Todo
            </Link>
          </Typography>

          {!loggedIn && (
            <>
              <Button color="inherit">
                {" "}
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Connexion{" "}
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Inscription{" "}
                </Link>
              </Button>{" "}
            </>
          )}

          {loggedIn && (
            <>
              <Button color="inherit" onClick={logOut}>
                Déconnexion
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
