import React from 'react';
import "./regi.css";

const Logi = () => {
 

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
                              <span>Login</span>
                           
                          </div>
                          <form id="FormLogin">
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>
                            <button type="submit" className="btn">Login</button>
                     
                            <a href="/register"  className="btn">   Register</a>
                            <a href="/" >Forgot password</a>
                          </form>

                        

                      </div>
                 
                  </div>
              </div>

          </div>
        
      </div>
     
    );
  };
  
  export default Logi;
