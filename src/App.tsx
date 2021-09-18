import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import Participants from "./pages/ParticipantJoin";
import ParticipantResult from "./pages/ParticipantResult";
import AdminResult from "./pages/AdminResult";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Route path="/participants/registration">
          <Participants />
        </Route>
        <Route path="/participants/result">
          <ParticipantResult />
        </Route>
        <Route path="/admin/result">
          <AdminResult />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
