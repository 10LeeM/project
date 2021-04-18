import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps, useHistory } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { isLoggedIn } from "../../store/slices/userSlice";
import paths from "../paths";

const DashRoute: FC<RouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector(isLoggedIn);

  const h = useHistory();

  useEffect(() => {
    if (!loggedIn) {
      h.push(paths.index);
    }
  }, [loggedIn, h]);

  return (
    <DashboardLayout>
      <Route {...rest} component={Component} />
    </DashboardLayout>
  );
};

export default DashRoute;
