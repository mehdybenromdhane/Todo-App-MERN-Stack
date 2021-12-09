import React, { StrictMode, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Login from "./components/Login";
import Inscription from "./components/Register";
import axios from "axios";
import AuthContext, { AuthContextProvider } from "./context/authContext";

axios.defaults.withCredentials = true;
function App() {
  const loggedIn = useContext(AuthContext);
  return (
    <>
      <AuthContextProvider>
        <StrictMode>
          <Router>
            <Navbar />

            <Switch>
              {!loggedIn && (
                <>
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Inscription} />{" "}
                </>
              )}
            </Switch>
          </Router>
        </StrictMode>
      </AuthContextProvider>
    </>
  );
}

export default App;
