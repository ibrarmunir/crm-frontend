import Wrapper from "components/layouts/wrapper/Wrapper";
import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = true;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Wrapper>
            <Component {...props} />
          </Wrapper>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};
