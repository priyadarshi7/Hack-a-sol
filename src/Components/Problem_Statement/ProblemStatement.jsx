import React from "react";
import "./ProblemStatement.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img from "../../assets/Vector.png"
AOS.init({once: true}); 

export default function ProblemStatement() {
    return (
        <div className="com-cont" id="Sponsors">
            <div className="com-head" data-aos="zoom-in">
                <h3>Problem Statement</h3>
            </div>
            <div className="teams-shortlisted">
                <a href="https://drive.google.com/file/d/1laOwulGEnwwusUjSfUx-6p1ykeKE_VZo/view?usp=drive_link" download target="_main"><button>Problem Statement<div className="vector"><img src={img}/></div></button></a>
            </div>
        </div>
    );
}