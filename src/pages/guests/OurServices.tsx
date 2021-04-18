import React from "react";
import Mission from "./Mission";
import "./ourservices.css";

const Ourservices = () => {
  const servcices = [
    {
      icon: "cog",
      title: "DOCTOR MANAGEMENT SYSTEM",
      description: `Everyday a doctor serves 50-100 patients ,75% of these patients
  depend on traditional ways of storing data.With Ohospital,DMS a
  doctor can manage the patient in one place`,
    },
    {
      icon: "stats-up",
      title: "Hospital Management System",
      description: `Our hospital management is hosted over the cloud and fit any size of the hospital with option of own customize.`,
    },
    {
      icon: "users",
      title: "Ecommerce",
      description: `Buying of health product is easy with Ohospital App and portal, with a few clicks the is bought and delivered to your place.`,
    },
    {
      icon: "layers",
      title: "Pharmacy Management System",
      description: `Our pharmacy management system is easy to use and can be access anytime. Our focus is dedicated to build the best place to manage business.`,
    },
   
  ];

  return (
    <div className="ourservices">
      <div className="ourservices__row">
        {servcices.map(({ description, icon, title }, i) => (
          <div key={i} className="ourservices__card">
            <i className={`lni lni-${icon}`}></i>
            <h1 className="ourservices__cardtitle">{title}</h1>
            <p className="ourservices__cardparagraph">{description}</p>
          </div>
        ))}
      </div>
<div>  <Mission /></div>
    
    </div>
  );
};

export default Ourservices;
