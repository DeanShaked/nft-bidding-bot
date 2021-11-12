// App
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// Components
import CollectionTable from "./collection-table/CollectionTable";
import MetaMaskOnBoarding from "./metamask-onboarding/MetaMaskOnBoarding";

/*
  This component manages all the routes in our project,
*/

const ReactRouter = () => {
  return (
    <Switch>
      <Route path={"/"} component={MetaMaskOnBoarding} exact />
      <Route path={"/collection-table"} component={CollectionTable} exact />
      <Route
        path={"/metamask-onboarding"}
        component={MetaMaskOnBoarding}
        exact
      />
    </Switch>
  );
};

export default ReactRouter;
