import React from "react";
import "./featureddoctors.css";



const Featureddoctors = () => {
 

  return (
      <div>
    <div className="doctors">
    <div className="small-container">
      <div className="row row-2">
      <h2 className="title">Our Doctors</h2>
     <a href="/doctorshome"> <p className="view">View All</p></a>
      </div>
      
      <div className="row">
        <div className="col-3">
          <img src="image/home.jpg" alt="" />
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <a  href ="/"  className="btn1">Consult</a>
        </div>
        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <a href ="/" className="btn1">Consult</a>
        </div>
        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <a href ="/" className="btn1">Consult</a>
        </div>
        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <a href ="/" className="btn1">Consult</a>
        </div>
      </div>
    </div>    
    <a href="/register" className="btn1"><i className="fa fa-arrow-right" />View All Doctors</a>  
  </div>

  </div>
   
  );
};

export default Featureddoctors;
