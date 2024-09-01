import React from "react";
import "./Teams.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img from "../../assets/Vector.png"
AOS.init({once: true}); 

export default function Teams() {
    return (
        <div className="com-cont" id="Sponsors">
            <div className="com-head" data-aos="zoom-in">
                <h3>Announcing</h3>
            </div>
            <div className="teams-shortlisted">
                <a href="https://drive.google.com/file/d/1Fe3jwsq-FRs04sB5MoNZ5QtHqbCQ-npv/view" download target="_main"><button>SHORTLISTED TEAMS LIST<div className="vector"><img src={img}/></div></button></a>
            </div>
        </div>
    );
}