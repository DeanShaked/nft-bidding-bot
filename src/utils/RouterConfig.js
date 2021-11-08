import React, { useEffect, useState } from "react";
import "./constants";
// NPM Imports
import { Switch, Route } from "react-router-dom";

import { paths } from "utils/constants";

// Components Imports
import Login from "features/login/Login";

/* 
  This component manages all the routes in our project,
*/

const RouterConfig = () => {
  return (
    <main className={isOverflowDisabled ? "overflow-disabled" : "main"}>
      <Switch>
        {/* List all public routes here */}
        <Route path={constants.homePath} component={Markets} exact />
        <Route path={paths.loginPath} component={Login} exact />
        <Route path={paths.portfolioPath} component={Portfolio} exact />
        <Route path={paths.depositPath} component={Deposit} exact />
        <Route
          path={paths.regulationFormPath}
          component={RegulationForm}
          exact
        />

        {/* List all private routes here */}

        {/* List of error routes here */}
        <Route path={paths.pageNotFoundPath} component={NotFound} exact />
        <Route
          path={paths.serviceUnavailablePath}
          component={ServiceUnavailable}
          exact
        />
        <Route component={Markets} />
      </Switch>
    </main>
  );
};

export default RouterConfig;
