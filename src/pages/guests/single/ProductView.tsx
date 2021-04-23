import React from 'react';
import Featuredproducts from '../Featuredproducts';
import Footer from '../Footer';
import "./productview.css";


const ProductView = () => {
 

    return (
        <div>
       
        <div className="small-container single-doctor">
        
          <div className="row">
            <div className="col-2">
              <img src="image/home.jpg" width="100%" alt="" />
              <div className="col2">
              <div className="small-img-row2">
                  <div className="small-img-col2">
                  <img src="image/home.jpg" width="100%" alt="" />
                  </div>
                  <div className="small-img-col2">
                  <img src="image/home.jpg" width="100%" alt="" />
                  </div>
                  <div className="small-img-col2">
                  <img src="image/home.jpg" width="100%" alt="" />
                  </div>
                  </div>
              </div>
             
            </div>
            <div className="col-2">
              
              <h1>Panadol</h1>
              <h3>Painkiller</h3>
             <h4>500/=</h4>
        
             <div>
             <input type="number" defaultValue={1} />
          <a  href ="/register"  className="btn">Add Cart</a>
          
          </div> 
          <h3>Product's Details <i className="fa fa-info"></i></h3>
          <hr/>
          <p>
              I specify on consultancy with outstanding result. I enjoy solving health challenges and 
              see a health nation.
          </p>
        
          <h3>Dosage <i className="fa fa-capsules"></i></h3>
          <hr/>
          <p>
              I specify on consultancy with outstanding result. I enjoy solving health challenges and 
              see a health nation.
          </p>

          <h3>Side Effect <i className="fa fa-heartbeat"></i></h3>
          <hr/>
          <p>
              I specify on consultancy with outstanding result. I enjoy solving health challenges and 
              see a health nation.
          </p>
            </div>
           
           
          </div>
        </div>      
        <Featuredproducts/>
        <Footer/>
      </div>
     
    );
  };
  
  export default ProductView;
