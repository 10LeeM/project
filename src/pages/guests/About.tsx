import React from "react";
import Footer from "./Footer";
import "./about.css";


const About = () => {
 

  return (
    <div>
    <div className="mission__ro">
       
      <div className="mission__paragraph">
     
        <h1>Accessible Healthcare</h1>
        <p>
        Ohospital is on a mission to increase accessibility of healthcare. <br /> through tailor made solutions. 
        We use innovation technology and digital infrastructure, <br /> 
        we deliver health care solution to the finger tips of the patients. <br /> 
        Our team believe with technology we can accelerate health provision and <br />  make it available.
        </p>
       
      </div>

      <div className="mission__image">
        <img src="/image/about.jpg" alt="my hospital" />
      </div>
      
    </div>


<div className="mission__ro">
        <div className="mission__image">
        <img src="/image/about2.jpg" alt="my hospital" />
      </div>
      <div className="mission__paragraph">
     
        <h1>Patient Centered</h1>
        <p>
        At Ohospital, we believe in putting the patient first and letting them control their health. <br />
        Patients are able to check on the status of their health and access to appropriate health providers. <br />
        They are able to check, follow up, book and even keep their records.<br />
         Ohospital Kit help patient personalize doctors and share records with the doctor of their choice.
        </p>
      
      </div>
      
    </div>

    <div className="mission__ro">
       
       <div className="mission__paragraph">
      
         <h1>Doctor in mind platfrom</h1>
         <p>
         Ohospital enable doctor, specialist, clinic, or hospital,<br />
          we optimize their ability to deliver high-class patient care <br />
          with Ohospital secure cloud based platform <br /> built to allow doctors to fast to 
           manage, offer services and follow up with patients.  
         </p>
  
       </div>
 
       <div className="mission__image">
         <img src="/image/mission.jpg" alt="my hospital" />
       </div>
       
     </div>



<Footer/>
</div>
   
  );
};

export default About;