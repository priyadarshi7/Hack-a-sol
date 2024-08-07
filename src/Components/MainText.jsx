import React from "react"
import comingSoon from "../assets/coming-soon-ezgif.com-crop.gif"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './MainText.css';
import GFG from "../assets/images/GFG logo.png"

export default function MainText(props){

    const [buttons,setButtons] = React.useState(false);

    return (
        <div className="container">
            <div className="text-content">
                <h1 data-aos="zoom-in" data-aos-duration="500">HACK-A-SOL</h1>
                {/* <img src={comingSoon} alt="" data-aos="zoom-in" data-aos-duration="1000"/> */}
                <h2 data-aos="zoom-in" data-aos-duration="500">13th-15th September</h2>
                <h2 data-aos-duration="500" data-aos="zoom-in">Annual Pan-India <span className="txt">Hackathon</span><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by IIIT-Naya Raipur</h2>
                <div className="buttons">
                    <div className="button1" onClick={()=>setButtons(prev=>!prev)}><div className="img_registration" style={{transition: "transform 0.5s ease-in-out", transform:buttons===true?"rotate(90deg)":"none"}}></div><div>REGISTER NOW</div></div>
                    <div className="button2" onClick={() => window.open("https://discord.gg/H24uuScGG9")}><div className="img-discord"></div><div>JOIN OUR DISCORD</div></div></div><div>
                </div>
                <div className="register">
                    <div className="register-button" id="unstop" style={{display:buttons===true?"flex":"none"}} onClick={()=>window.open('https://unstop.com/o/tcwkzKR?lb=H0Gvk984&utm_medium=Share&utm_source=shortUrl','_main')}>HACK-A-SOL 3.0</div>
                    <div className="register-button"  id="GFG" style={{display:buttons===true?"flex":"none"}} onClick={()=>window.open('https://www.geeksforgeeks.org/hackathon/code-conquerors','_main')}>CODE CONQUERORS</div> 
                </div>
            </div>
        </div>
          )
}