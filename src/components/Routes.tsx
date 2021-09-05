import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Header";

const Routes = () => {
  return (
    <Router>
      <>
        <Header />
      </>
    </Router>
  );
};

export default Routes;
