import React from 'react';
import "./message.css";


const Message = () => {
 

    return (
      <div className="message">
          <div className="chat">
              <div className="chat-header">
                <div className="profile">
                    <div className="left">
                    <img src="image/arrow.png" className="arrow-img" alt="" />
                    <img src="image/home.png" className="profile-img" alt="" />
                    <h2>Daniel</h2>
                    <span>online</span>
                    </div>
                    <div className="right">
                        
                    </div>
                </div>
              </div>
              <div className="chat-box"></div>
              <div className="chat-footer"></div>
          </div>
       
      </div>
     
    );
  };
  
  export default Message;