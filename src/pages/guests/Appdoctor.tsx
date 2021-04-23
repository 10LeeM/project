import React from "react";
import "./appdoctor.css";



const Appdoctor = () => {
 

  return (
    <div className="app">
    <div className="app-container">
      <div className="row">
        <div className="col-app">
          <img src="image/d-app.png" className="d-app" alt="" />
        </div>
        <div className="col-app">
          <p>Are you looking to manage your patients effectively?</p>
          <h1>Doctor's App</h1>
          <small>Our app help doctors to effectively manage their patients, 
            providing the option for virtual visits, online chatting, invite other doctors for assistance and prescription management. </small>
        </div>
      </div>
    </div>
  </div>
   
  );
};

export default Appdoctor;
