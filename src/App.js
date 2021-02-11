import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/browse">
          <p>I will be the sign in page</p>
        </Route>
        <Route path="/signin">
          <p>I will be the sign up page</p>
        </Route>
        <Route path="/browse">
          <p>I will be the browse page</p>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
