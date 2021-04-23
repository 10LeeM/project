
import React from "react";
import "./display.css";
import Pagination from "./Pagination";
import Search from "./Search";


const DoctorsDisplay = () => {
 

  return (
    <div>
    <div className="doctors">
    <div className="small-container">
    <Search/>
      <div className="row">
       <div className="col-3"> 
         <div>
        <a href="/doctorview"><img src="image/home.jpg" alt="" />
          <h4>Dr Panadol</h4></a> </div> 
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <div>
          <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
          </div> 
         
          </div>

        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
        </div>
        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
        </div>
        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
        </div>
      </div>
    </div>      
  </div>

  <div className="doctors">
    <div className="small-container">
     
      <div className="row">
        <div className="col-3">
          <img src="image/home.jpg" alt="" />
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <div>
          <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
          </div>
         
        </div>
        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
         <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
        </div>
        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
          <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
        </div>
        <div className="col-3">
          <img src="image/home.jpg" alt=""/>
          <h4>Dr Panadol</h4>
          <div className="rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <p>500/=</p>
         <a  href ="/register"  className="btn">Consult</a>
          <a href ="/register" className="btn">Book</a>
        </div>
      </div>
    </div>   
    <Pagination/>   
  </div>

  </div>
   
  );
};

export default DoctorsDisplay;