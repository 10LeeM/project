import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../guests/Footer';
import "./medkit.css";
import MedkitSlider from './MedkitSlider';




import image1 from "./assets/individual.jpg";
import image2 from "./assets/family.jpg";
import image3 from "./assets/group.jpg";
import MedkitInfo from './MedkitInfo';




const Medkit = () => {
  return <>
  <div>
    <MedkitSlider images={[image1 , image2, image3]}/>
    <MedkitInfo/>
    <div className="header"><h1>Our Medical Kit</h1></div> 
    <div className="medkit">
    
      <div className="col">
      <div className="table">
        <h2>BASIC</h2>
        <div className="price">
          1200
          <span>per month</span>
        </div>
        <ul>
          <li><strong>1</strong>Insurance</li>
          <li><strong>1</strong>Paying</li>
          <li><strong>1</strong>Purchase</li>
        </ul>
        <a href="/">Order Now</a>
      </div>
      </div>
     
        <div className="col">
        <div className="table">
        <h2>SILVER</h2>
        <div className="bannerr">Popular</div>
        <div className="price">
          1200
          <span>per month</span>
        </div>
        <ul>
          <li><strong>1</strong>Doctor</li>
          <li><strong>1</strong>Insurance</li>
          <li><strong>1</strong>Paying</li>
          <li><strong>1</strong>Purchase</li>
        </ul>
        <a href="/">Order Now</a>
      </div>
        </div>
        <div className="col">
        <div className="table">
        <h2>PREMIUM</h2>
        <div className="price">
          1200
          <span>per month</span>
        </div>
        <ul>
        <li><strong>1</strong>Doctor</li>
          <li><strong>1</strong>Insurance</li>
          <li><strong>1</strong>Paying</li>
          <li><strong>1</strong>Purchase</li>
          <li><strong>1</strong>Emergency Response</li>
        </ul>
        <a href="/">Order Now</a>
      </div>
        </div>
        <div className="col">
        <div className="table">
        <h2>FAMILY</h2>
        <div className="price">
          1200
          <span>per month</span>
        </div>
        <ul>
        <li><strong>1</strong>Doctor</li>
          <li><strong>1</strong>Insurance</li>
          <li><strong>1</strong>Paying</li>
          <li><strong>1</strong>Purchase</li>
        </ul>
        <a href="/">Order Now</a>
      </div>
        </div>
        <div className="col">
        <div className="table">
        <h2>ORGANIZATION</h2>
        <div className="price">
          1200
          <span>per month</span>
        </div>
        <ul>
         
          <li><strong>1</strong>Insurance</li>
        </ul>
        <a href="/">Order Now</a>
      </div>
        </div>
    </div>
    <Footer/>
  </div>
  </>
};

export default Medkit;



