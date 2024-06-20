import React from "react"
import comingSoon from "../assets/coming-soon-ezgif.com-crop.gif"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function MainText(props){

    return (
        <div className="container">
            <div className="text-content">
                <h1 data-aos="zoom-in" data-aos-duration="500">HACK-A-SOL</h1>
                <img src={comingSoon} alt="" data-aos="zoom-in" data-aos-duration="1000"/>
                <h2 data-aos-duration="500" data-aos="zoom-in">Annual Pan-India <span className="txt">Hackathon</span><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;by IIIT-Naya Raipur</h2>
                <div className="buttons">
                    {/* <div className="button1" onClick={props.modalAppear}><div className="img_registration"></div><div>PRE-REGISTER NOW</div></div> */}
                    <div className="button2" onClick={() => window.open('https://discord.gg/gejd3wHT', '_main')}><div className="img-discord"></div><div>JOIN OUR DISCORD</div></div></div><div>
                </div>
            </div>
        </div>
          )
}