import React, { StrictMode, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Login from "./components/Login";
import Inscription from "./components/Register";
import axios from "axios";
import AuthContext, { AuthContextProvider } from "./context/authContext";
import TodoApp from "./components/TodoApp";
import EditTodo from "./components/EditTodo";

axios.defaults.withCredentials = true;
function App() {
  const loggedIn = useContext(AuthContext);
  return (
    <>
      <AuthContextProvider>
        <StrictMode>
          <Router>
            <Navbar />
            <Route path="/todo" component={TodoApp} />
            <Route path="/edit" component={EditTodo} />

            <Switch>
              {!loggedIn && (
                <>
                  <Route path="/login" exact component={Login} />
                  <Route path="/register" exact component={Inscription} />{" "}
                </>
              )}
              {loggedIn && (
                <>
                  <Route path="/todo" component={TodoApp} />
                  <Route path="/edit/:id" component={EditTodo} />
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
