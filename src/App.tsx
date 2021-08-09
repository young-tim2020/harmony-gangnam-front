import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Participants from "./pages/Particants";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/participants">
          <Participants />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
