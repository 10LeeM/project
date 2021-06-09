import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import paths from "../../routes/paths";
import { isLoggedIn } from "../../store/slices/userSlice";
import Navbar from "../Navbar";

const Guest: FC = ({ children }) => {
  const loggedIn = useSelector(isLoggedIn);
  const h = useHistory();
  const l = useLocation();

  useEffect(() => {
    if (loggedIn && l.pathname !== paths.cart) {
      h.push(paths.common.dashboard);
    }
  }, [loggedIn, h, l]);

  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Guest;
