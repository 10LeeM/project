import React from "react";

import "./doctorservices.css";

const DoctorServices = () => {
  const servcices = [
    {
      icon: "calendar",
      title: "Book appointments Anytime",
     
    },
    {
        icon: "users",
        title: "Peace of mind! With all your health, in  one place. ",
        
      },
    {
      icon: "wallet",
      title: "Chat with your doctor ",
     
    },
    
   
   
  ];

  return (
    <div className="doctorservices">
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
