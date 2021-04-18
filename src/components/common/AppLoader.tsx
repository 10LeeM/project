import React from "react";
import Loader from "react-loaders";
import "./loading.css";

const AppLoader = () => {
  return (
    <div className="loading">
      <Loader type="ball-scale" active />
    </div>
  );
};

export default AppLoader;
