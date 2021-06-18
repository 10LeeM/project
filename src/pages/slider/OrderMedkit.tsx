import React from 'react';
import Footer from '../guests/Footer';
import "./ordermedkit.css";

const OrderMedkit = () => {
  return <div>
  <div className="cont">
    <div className="medform">
<div className="image-left">
<img src="image/family.jpg" alt="order"/>
</div>
   

<form action="#">
  <div className="order-topic">Let Us Help You </div>
  <div className="input-input">
  <label>Enter Your Name</label>
    <input type="text" required/>
    
  </div>
  <div className="input-input">
  <label>Enter Your Email</label>
    <input type="email" required/>
   
  </div>
  <div className="input-input">
  <label>Enter Phone Number</label>
    <input type="number" required/>
    
  </div>
  <div className="input-input">
    <input type="submit" value="Send Order"/>
    
  </div>
</form>
</div>
    </div>
    <Footer/>
</div>

};

export default OrderMedkit;



