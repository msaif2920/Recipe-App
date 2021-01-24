import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ResultsPage from "./ResultsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/results" exact component={ResultsPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
