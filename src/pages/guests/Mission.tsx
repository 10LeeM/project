import React from "react";
import Appdoctor from "./Appdoctor";
import Featureddoctors from "./Featureddoctors";
import "./mission.css";
import DoctorServices from "./DoctorServices";

const Mission = () => {
  return (
    <div className="mission__row">
      <div className="mission__paragraph">
     
        <h1>Our Mission</h1>
        <p>
          Our mission is to make healthcare what google did with information? 
          accessible!
          <br />
          ensuring everyone can assess it at the tip of their finger tips. 
          
         Available to everyone and at anytime. <br /> Our vision is driven by
          passion and well being at
          
          heart and the love for communities.<br /> We believe access of health services is a
          right and everyone should 
          <br />
         get treatment whether they can pay or not.
        </p>
        <a href="/about" className="btn"><i className="fa fa-android" />Learn More</a>
      </div>
      <div className="mission__image">
        <img src="/image/mission.jpg" alt="my hospital" />
      </div>

      <DoctorServices/>
      <Appdoctor/>
    
        <Featureddoctors/>
     
    </div>
  );
};

export default Mission;
