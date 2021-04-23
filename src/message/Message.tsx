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
                    <img src="image/video.png" className="icon" alt="" />
                    <img src="image/call.png" className="icon" alt="" />
                    <img src="image/more.png" className="icon" alt="" />
                    </div>
                </div>
              </div>
              <div className="chat-box"></div>
              <div className="chat-footer">
              <img src="image/call.png" className="emo" alt="" />
              <textarea placeholder="Type your message here"></textarea>
              <div className="chat-icon">
              <img src="image/call.png"  alt="" />
              <img src="image/call.png"  alt="" />
              
              </div>
              <img src="image/call.png" className="mic" alt="" />
              </div>
          </div>
       
      </div>
     
    );
  };
  
  export default Message;