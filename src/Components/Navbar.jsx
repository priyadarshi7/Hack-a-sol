import React from "react"
import sac_logo from "../assets/sac-logo.png"

export default function Navbar(){
    return (
        <div className="navbar">
         <a href="https://sac.iiitnr.ac.in/" className="logo">
         <img src={sac_logo}></img>
         </a>  
            <ul className="navbar-list">
                <li>About Us</li>
                <li>Schedule</li>
                <li>Prizes</li>
                <li>Tracks</li>
                <li>Contact Us</li>
            </ul>
           

        </div>
    )
}