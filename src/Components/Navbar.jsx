import React from "react"
import sac_logo from "../assets/sac-logo.png"

export default function Navbar(){
    return (
        <div className="navbar">
            <img src={sac_logo}></img>
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