import React from 'react';
import Featureddoctors from '../Featureddoctors';
import "./doctorview.css";


const DoctorView = () => {
 

    return (
        <div>
       
        <div className="small-container single-doctor">
        
          <div className="row">
            <div className="col-2">
              <img src="image/home.jpg" width="100%" alt="" />
             
            </div>
            <div className="col-2">
              <h2>Dentists</h2>
              <h1>Dr Panadol</h1>
             <h4>500/=</h4>
             <div>
          <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
          </div> 
          <h3>Doctor's Details <i className="fa fa-info"></i></h3>
          <p>
              I specify on consultancy with outstanding result. I enjoy solving health challenges and 
              see a health nation.
          </p>
            </div>
           
           
          </div>
        </div>      
        <Featureddoctors/>
      </div>
    
      
      
   
    
     
     
    );
  };
  
  export default DoctorView;

