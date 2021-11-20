// App
import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./home/Home";
import MetaMaskOnBoarding from "./metamask-onboarding/MetaMaskOnBoarding";

/*
  This component manages all the routes in our project,
*/

const ReactRouter = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} exact />

      <Route path={"/home"} component={Home} exact />
      <Route
        path={"/metamask-onboarding"}
        component={MetaMaskOnBoarding}
        exact
      />
    </Switch>
  );
};

export default ReactRouter;
