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
        <Route path="/participantjoin">
          <Participants />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
