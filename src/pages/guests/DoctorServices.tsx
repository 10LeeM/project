import React from "react";

import "./doctorservices.css";

const DoctorServices = () => {
  const servcices = [
    {
      icon: "calendar",
      title: "Book or Call a Doctor Anytime",
     
    },
    {
        icon: "users",
        title: "Peace of mind! Healthcare in  one place. ",
        
      },
    {
      icon: "wallet",
      title: "Easy to pay and buy ",
     
    },
    
   
   
  ];

  return (
    <div className="doctorservices">
      <div className="commitment">Our Commitment</div>
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
