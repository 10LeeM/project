import React from "react";

import "./medkitinfo.css";

const DoctorServices = () => {
  const servcices = [
    {
      icon: "heart-monitor",
      title: "Around the clock Monitor",
     
    },
    {
        icon: "hospital",
        title: "Doctor 24/7 ",
        
      },
    {
      icon: "capsule",
      title: "Medicine at your door ",
     
    },
    {
        icon: "ambulance",
        title: "Emergency Response ",
       
      },
    
   
   
  ];

  return (
    <div className="doctorservices">
      <div className="commitment">You Control Your Health</div>
      <div className="doctorservices__row">
        {servcices.map(({  icon, title }, i) => (
          <div key={i} className="doctorservices__card">
            <i className={`lni lni-${icon}`}></i>
            <h1 className="doctorservices__cardtitle">{title}</h1>
           
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default DoctorServices;
