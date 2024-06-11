import React from "react"
import comingSoon from "../assets/coming-soon-ezgif.com-crop.gif"

export default function MainText(){
    return (
        <div className="container">
            <div className="text-content">
                <h1>HACK-A-SOL</h1>
                <img src={comingSoon}/>
                <h2>Annual Pan-India <span className="txt">Hackathon</span><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by IIIT-Naya Raipur</h2>
                <div className="buttons">
                    <div className="button1"><div>PRE-REGISTER NOW</div></div>
                    <div className="button2"><div className="img-discord"></div><div>JOIN OUR DISCORD</div></div></div><div>
                </div>
            </div>
        </div>
           )
}