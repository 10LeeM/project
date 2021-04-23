
import React from "react";

import Search from "./Search";
import "./display.css";
import Pagination from "./Pagination";


const PharmacyDisplay = () => {
 

  return (
    <div>
      
    <div className="product">
        <div className="small-container">
        <Search/>
          <div className="row">
            <div className="col-4">
            <div>
            <a href="/productview"> <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4></a>
             </div>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
          </div>
        </div>
       
      </div>

      <div className="product">
        <div className="small-container">
        
          <div className="row">
            <div className="col-4">
             <div>
            <a href="/productview"> <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4></a>
             </div>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
            <div className="col-4">
              <img src="image/home.jpg" alt=""/>
              <h4>Panadol</h4>
              <p>100/=</p>
              <a href ="/" className="btn">Add Cart</a>
            </div>
          </div>
        </div>
        <Pagination/>
      </div>

      </div>
   
  );
};

export default PharmacyDisplay;