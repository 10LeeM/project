import React from 'react'
import "./doctorslider.css";


const DoctorSlider = () => {
  return <div>
      <div className="hero">
          <div className="roow">
              <div className="left-sec">
                  <div className="content">
                      <h2><span>Dr. Clif</span><br/>
                          Kamau</h2>
                          <p>A good doctor’s comforting and reassuring words are sometimes more 
                              powerful than medicines</p>
                  </div>
                  <button className="discover-button">
                      <a href="/login">Consult</a><span><i className="fa fa-arrow-circle-o-right"></i></span>
                  </button>
                  <div className="information">
                  <div className="doctor-profile">
                      <p>Specialization</p>
                      <h2>Rate</h2>
                  </div>
                  <div className="doctor-profile">
                      <p>Dentist</p>
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

export default DoctorSlider;



