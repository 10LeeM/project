import React from 'react'
import "./patientslider.css";


const PatientSlider = () => {
  return <div>
  <div className="hero">
      <div className="roow">
          <div className="left-sec">
              <div className="content">
                  <h2><span>Offer</span></h2>
                      <p>Happiness is not in money, but in health. Always with your Doctor</p>
              </div>
              <button className="discover-button">
                  <a href="/doctorshome">Discover</a><span><i className="fa fa-arrow-circle-o-right"></i></span>
              </button>
              <div className="information">
              <div className="doctor-profile">
                  <p>Category</p>
                  <h2>Price</h2>
              </div>
              <div className="doctor-profile">
                  <p>Pain Killer</p>
                  <h2>500/=</h2>
              </div>
              </div>
              
          </div>

          <div className="right-sec">
              <div className="doctors">
                  <div><img src="doctors/clif.jpg" alt=""/></div>
                  
              </div>
          </div>
      </div>
     
  </div>
</div>
};

export default PatientSlider;



