import React from 'react';
import "./regi.css";

const Regi = () => {
 

    return (
        <div className="account-page">
        <div className="container">
            <div className="row">
                <div className="col-2">
                <img src="image/home.png" width="100%" alt="" />
                </div>
                <div className="col-2">
                    <div className="form-container">
                        <div className="form-btn">
                            
                            <span>Register</span>
                         
                        </div>
                      

                        <form id="FormReg">
                          <input type="text" placeholder="Username"/>
                          <input type="email" placeholder="Email"/>
                          <input type="password" placeholder="Password"/>
                          <button type="submit" className="btn">Register</button>
                          <a href="/logi"  className="btn">   Login</a>
                        
                          <a href="/" >Forgot password</a>
                        </form>

                    </div>
               
                </div>
            </div>

        </div>
      
    </div>
     
    );
  };
  
  export default Regi;