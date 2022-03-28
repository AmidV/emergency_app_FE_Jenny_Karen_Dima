import React from 'react'
import './EmergencyButton.css'


function EmergencyButton() {

    function sendMessage() {
        console.log("send emergency message")
    }

    return (
     
        <div className="emergencyButton" onClick={sendMessage}>
          <p>Double click to send emergency beacon</p>
        </div>
      
    );
}

export default EmergencyButton