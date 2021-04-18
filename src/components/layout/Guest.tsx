import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import paths from "../../routes/paths";
import { isLoggedIn } from "../../store/slices/userSlice";
import Navbar from "../Navbar";

const Guest: FC = ({ children }) => {
  const loggedIn = useSelector(isLoggedIn);
  const h = useHistory();

  useEffect(() => {
    if (loggedIn) {
      h.push(paths.dashboard);
    }
  }, [loggedIn, h]);

  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Guest;
