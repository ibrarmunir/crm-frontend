import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import useRoutes from "hooks/useRoutes";
import { PrivateRoute } from "components/privateRoute";

const Routes = () => {
  const routes = useRoutes();
  return (
    <Switch>
      <Suspense
        fallback={
          <div className="text-center text-info">
            <p>Loading.....</p>
          </div>
        }
      >
        {routes.map((route) => {
          if (route.isPrivate) {
            return (
              <PrivateRoute
                path={route.path}
                exact={route.exact}
                key={route.key}
                component={route.component}
              />
            );
          }

          return (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.key}
            />
          );
        })}
      </Suspense>
    </Switch>
  );
};

export default Routes;
