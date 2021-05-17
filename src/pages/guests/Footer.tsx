
import React from "react";
import "./footer.css";



const Footer = () => {
 

  return (
    <div className="footer">
    <div className="containe">
      <div className="row">
        <div className="footer-col-1">
          <h3>Get Our App</h3>
          <p>We are with you all the time. </p>
          <div className="app-logo" >
          <a href="/">  <img src="image/google.svg" alt=""/> </a>
          </div>
        </div>
        <div className="footer-col-2">
        <a href="/"> <img src="image/logo.png" alt="" /></a>
          <p>Ohospital ensure you have access to health care providers and services anywhere.</p>
        </div>
        <div className="footer-col-3">
          <h3>Useful Link</h3>
          <ul>
          <a href="/doctorshome"><li><i className="fa fa-user"></i>Doctors</li></a>
          <a href="/pharmacyhome"><li><i className="fa fa-user"></i>Pharmacy</li></a>
            <a href="/about"><li><i className="fa fa-user"></i>About</li></a>
            <a href="/recordpolicy"><li><i className="fa fa-user"></i>Record Policy</li></a>
            <a href="/privacypolicy"><li><i className="fa fa-user"></i>Privacy Policy</li></a>
            <a href="/termscondition"><li><i className="fa fa-user"></i>Terms & Conditions</li></a>
           
          </ul>
        </div>
        <div className="footer-col-4">
          <h3>Follow Us</h3>
          <ul>
          <a href="https://www.facebook.com/Ohospital"> <li><i className="fa fa-facebook"></i>Facebook</li></a>
           <a href="https://twitter.com/Ohospital3"><li><i className="fa fa-twitter"></i>Twitter</li></a> 
           <a href="https://www.linkedin.com/company/ohospital/?viewAsMember=true"> <li><i className="fa fa-linkedin"></i>Linkedln</li></a> 
           <a href="https://www.youtube.com/channel/UCCQ0I3oX89-7f1bmHEnHD0A">  <li><i className="fa fa-youtube-square"></i>Youtube</li></a> 
          </ul>
        </div>
      </div>
     <hr/>
     <p className="copyright"> Copyright 2021 - Ohospital Cloud Limited</p>
    </div>
    </div>
   
  );
};

export default Footer;



