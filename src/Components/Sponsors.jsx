import React from "react";
import "./Sponsors.css";
import Nord_Pass from "../assets/images/Sponsors/NordPass-white-horizontal (1).png";
import Nord_VPN from "../assets/images/Sponsors/NordVPN horizontal.png";
import Incogni from "../assets/images/Sponsors/incogni white (3).png";
import QuillAudits from "../assets/images/Sponsors/QuillAudits.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({once: true}); 

export default function Sponsors() {
    return (
        <div className="com-cont" id="Sponsors">
            <div className="com-head" data-aos="zoom-in">
                <h3>WE ARE GLAD TO ANNOUNCE OUR</h3>
                <h2>SPONSORS</h2>
            </div>
            <div className="com-body" data-aos="zoom-in" data-aos-delay="300">
                <div className="com-partner">
                    <img src={Nord_Pass}></img>
                    <h2>NordPass</h2>
                </div>
                <div className="com-partner">
                    <img src={Nord_VPN}></img>
                    <h2>NordVPN</h2>
                </div>
                <div className="com-partner">
                    <img src={Incogni}></img>
                    <h2>Incogni</h2>
                </div>
                <div className="com-partner">
                    <img src={QuillAudits}></img>
                    <h2>Quill Audits</h2>
                </div>
            </div>
        </div>
    );
}