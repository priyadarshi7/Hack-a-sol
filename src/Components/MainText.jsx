import React, { useState } from "react";
import comingSoon from "../assets/coming-soon-ezgif.com-crop.gif";

export default function MainText() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="container">
      <div className="text-content">
        <h1>HACK-A-SOL</h1>
        <div style={{ display: isImageLoaded ? 'none' : 'block' }}>Loading...</div>
        <img 
          src={comingSoon} 
          id="csn" 
          onLoad={() => setIsImageLoaded(true)} 
          onError={() => console.error('Error loading image')} 
          style={{ display: isImageLoaded ? 'block' : 'none' }}
        />
        {isImageLoaded && (
          <>
            <h2>
              Annual Pan-India <span className="txt">Hackathon</span>
              <br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by IIIT-Naya Raipur
            </h2>
            <div className="buttons">
              {/* <div className="button1" onClick={() => window.open(url, '_main')} ><div className="img_registration"></div><div>PRE-REGISTER NOW</div></div> */}
              <div 
                className="button2" 
                onClick={() => window.open('https://discord.gg/gejd3wHT', '_main')}
              >
                <div className="img-discord"></div>
                <div>JOIN OUR DISCORD</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
