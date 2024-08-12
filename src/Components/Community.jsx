import React from "react";
import "./Community.css";
import IIITV from "../assets/Community_Partners/IIIT_V_Logo.png";
import IIITians from "../assets/Community_Partners/IIITians_Network_Logo.png";
import IITIndore from "../assets/Community_Partners/IIT_Indore_Logo.png";
import IITMadras from "../assets/Community_Partners/IIT_Madras_Logo.png";
import IITBHU from "../assets/Community_Partners/IIT_BHU_Logo.png";
import IITMandi from "../assets/Community_Partners/IIT_Mandi.png";
import eDAM from "../assets/Community_Partners/e-DAM-logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({once: true}); 

export default function Community() {
    return (
        <div className="com-cont">
            <div className="com-head" data-aos="zoom-in">
                <h3>WE ARE GLAD TO ANNOUNCE OUR</h3>
                <h2>COMMUNITY PARTNERS</h2>
            </div>
            <div className="com-body" data-aos="zoom-in" data-aos-delay="300">
                <div className="com-partner">
                    <img src={IIITV}></img>
                    <h2>IIIT VADODARA</h2>
                </div>
                <div className="com-partner">
                    <img src={IIITians}></img>
                    <h2>IIITIANS NETWORK</h2>
                </div>
                <div className="com-partner">
                    <img src={IITIndore}></img>
                    <h2>IIT INDORE</h2>
                </div>
                <div className="com-partner">
                    <img src={IITMadras}></img>
                    <h2>IIT MADRAS</h2>
                </div>
                <div className="com-partner">
                    <img src={IITBHU}></img>
                    <h2>IIT BHU</h2>
                </div>
                <div className="com-partner">
                    <img src={IITMandi}></img>
                    <h2>IIT MANDI</h2>
                </div>
                <div className="com-partner">
                    <img src={eDAM}></img>
                    <h2>e-DAM</h2>
                </div>
            </div>
        </div>
    );
}