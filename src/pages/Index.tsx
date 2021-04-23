import React from "react";
import Appdoctor from "./guests/Appdoctor";
import Featuredproducts from "./guests/Featuredproducts";
import Footer from "./guests/Footer";
import OurServices from "./guests/OurServices";
import "./navigation.css";

const Home = () => {
  return (
    
    <div>
      <div className="row">
          <div className="col-2">
            <h1>Ohospital Enabling you to Connect with the <br />DOCTOR Always!</h1>
            <p>Ohospital allows patients to easily and quickly find doctors and follow up with them as needed. And, 
              allows for doctors to effectively manage how they offer services. </p>
            <a href="/" className="btn"><i className="fa fa-android" />Download App</a>
          </div>
          <div className="col-2">
            <img src="image/home.png" alt="" />
          </div>
        </div><div><OurServices/></div>
  
<Featuredproducts/>
      
  
        <Appdoctor/>
        <Footer/>
    </div>
 
  );
};

export default Home;
