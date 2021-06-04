import React from "react";
import Footer from "../Footer";
import "./checkout.css";


const Checkout = () => {
  return <div><div className="wraper">
<h2>Payment Information</h2>
<form method="POST">
  <h4>Account</h4>
  <div className="input-group">
   <div className="input-box">
     <input type="text" placeholder="First Name" required className="name" /> <i className="fa fa-user icon"></i>
   </div>
   <div className="input-box">
     <input type="text" placeholder="Last Name" required className="name" /> <i className="fa fa-user icon"></i>
   </div>
  </div>

  <div className="input-group">
  <div className="input-box">
     <input type="email" placeholder="Email Address" required className="name" /> <i className="fa fa-envelope icon"></i>
   </div>
  </div>

 

  <div className="input-group">
    <div className="input-box">
      <h4>Payment Details</h4>
      <div className="payy">
      <input type="radio" name="pay" id="bc1" checked className="radio"/>
      <label htmlFor="bc1"><span>
        <i className="fa fa-cc-visa"></i>Credit Card
        </span></label>

        <a href="">   
         <input type="radio" name="pay" id="bc2" checked className="radio"/>
      <label htmlFor="bc2"><span>
       <i className="fa fa-mobile"></i>Mpesa
    
        </span></label></a> 
      </div>
     
    </div>
   
  </div>

<div className="input-group">
  <div className="input-box">
    <input type="tel" placeholder="Card Number" required className="name"/>
    <i className="fa fa-credit-card icon"></i>
  </div>
</div>

<div className="input-group">
  <div className="input-box">
    <input type="tel" placeholder="Card User" required className="name"/>
    <i className="fa fa-user icon"></i>
  </div>
  <div className="input-box">
    <h5>Expiry Date</h5>
  <select>
    <option>01 Jun</option>
    <option>02 Jun</option>
    <option>03 Jun</option>
  </select>

  <select>
    <option>2021</option>
    <option>2022</option>
    <option>2023</option>
  </select>

</div>


</div>

<div className="input-group">
  <div className="input-box">
    <button type="submit">
      PAY NOW
    </button>
  </div>
</div>

</form>
  </div>;
  <Footer/></div>
};

export default Checkout;
