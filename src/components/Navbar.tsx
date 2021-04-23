import React, { useState } from "react";
import { Link } from "react-router-dom";
import paths from "../routes/paths";
import "./navigation.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
 

  return (
    <div>
    <div className="navbar">
      <div className="logo">
      <Link to="/"> <img src="image/logo.png" alt="" width="75px" /></Link> 
     
      </div>
      <nav>
        <ul id="MenuItems">
        <li> <Link to="/">Home</Link></li>
        <li> <Link to={paths.doctorshome}>Doctors</Link></li>
        <li> <Link to={paths.pharmacyhome}>Pharmacy</Link></li>
        <li> <Link to={paths.login}>Account</Link></li>
   
        </ul>
      </nav>
      <a href="/cart">
      <img src="image/cart.png" width="30px" height="30px" className="checkout" /></a>
      <img src="image/menu.png" className="menu-icon" />
    </div>
    
    </div>
 
  );
};

export default Navbar;
