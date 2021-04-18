import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import Guest from "../../components/layout/Guest";

const GuestRoute: FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Guest>
      <Route {...rest} component={Component} />
    </Guest>
  );
};

export default GuestRoute;
