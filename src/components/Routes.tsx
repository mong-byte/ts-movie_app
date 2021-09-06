import TV from "src/pages/TV/TV";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Header } from ".";

const Routes: React.FC = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={TV} />
        </Switch>
      </>
    </Router>
  );
};

export default Routes;
