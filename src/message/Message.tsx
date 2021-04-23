import React from 'react';
import "./message.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import CallIcon from '@material-ui/icons/Call';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CameraAltIcon from '@material-ui/icons/CameraAlt';


const Message = () => {
 

    return (
      <div className="message">
          <div className="chat">
              <div className="chat-header">
                <div className="profile">
                    <div className="left">
                    <i className="fa fa-arrow-left"></i>
                  
                    <img src="image/home.png" className="profile-img" alt="" />
                    <h2>Daniel</h2>
                    <span>online</span>
                    </div>
                    <div className="right">  
                    
                    <VideoCallIcon className="video"/>  
                    <CallIcon className="call"/>           
                    <MoreVertIcon className="more"/>
                
          
                    </div>
                </div>
              </div>
              <div className="chat-box"></div>
              <div className="chat-footer">
                <EmojiEmotionsIcon className="emoji"/>
            
              <textarea placeholder="Type your message here"></textarea>
              <div className="chat-icon">
                <FileCopyIcon/>
              <CameraAltIcon/>              
              </div>
              <i className="fa fa-microphone"></i>
            
              </div>
          </div>
       
      </div>
     
    );
  };
  
  export default Message;