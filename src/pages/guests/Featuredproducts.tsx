import React from "react";

import "./featureddoctors.css";


const Featuredproducts = () => {
 

  return (
    <div className="product">
        <div className="small-container">
         
          <div className="row row-2">
          <h2 className="title">Featured Products</h2>
     <a href="/pharmacyhome"> <p className="view">View All</p></a>
      </div>
          <div className="row">
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Buy</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Buy</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Buy</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Buy</a>
            </div>
          </div>
        </div>
       
      </div>
   
  );
};

export default Featuredproducts;

