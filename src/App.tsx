import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Participants from "./pages/ParticipantJoin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ParticipantJoin">
          <Participants />
        </Route>
        <Route path="/Main">
          <Main />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
