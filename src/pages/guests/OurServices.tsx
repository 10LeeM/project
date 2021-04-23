import React from "react";
import Mission from "./Mission";
import "./ourservices.css";

const Ourservices = () => {
  const servcices = [
    {
      icon: "cog",
      title: "Online Consultancy",
      description: `Ohospital allows patients to easily and quickly find doctors, Consult
       and follow up with the doctors.`,
    },
    {
      icon: "stats-up",
      title: "Monitoring and Follow up",
      description: `Doctor's are able to monitor patients with pre-condition, live follow up with
      the patients.`,
    },
    {
      icon: "users",
      title: "Health Product & Medicine",
      description: `We have make it easy for patients to purchase all their medical products, with few
      click of button.`,
    },
    {
      icon: "layers",
      title: "Book and Management",
      description: `Saving time is one of the drive at Ohospital, we ensure patients and doctors save time and
      are able to focus on what is important. `,
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
