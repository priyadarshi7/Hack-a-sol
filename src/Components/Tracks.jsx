import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

AOS.init(); // Initialize AOS library


export default function Tracks() {
    return(
        <div className="tracks_cont" id="Tracks">
            <div className="tracks_heading" data-aos="zoom-in-down" data-aos-duration="500">
                <h2>TRACKS</h2>
            </div>
            <div className="tracks_events" data-aos="flip-up" data-aos-delay="200">
                <div className="tracks_box"></div>
                <div className="tracks_box"></div>
                <div className="tracks_box"></div>
                <div className="tracks_box"></div>
                <div className="tracks_box"></div>
            </div>
            <div className="tracks_foot" data-aos="zoom-in">
                <h2>TO BE REVEALED SOON</h2>
            </div>
        </div>
    )
}