import React from 'react'
import iiit from '../assets/images/iiitnr.png'

export default function AboutUs(){


    return (
        <div className="main-about-us">
            <div className="about-us-heading">
                <h2>ABOUT US</h2>
            </div>
            <div className="two-boxes-div1">
                <img src={iiit}></img>
                <div>
                    <div className="about-us-small">
                    <h2>ABOUT IIIT NAYA RAIPUR</h2>
                    </div>
                    <div className="small-content">The International Institute of Information Technology, Naya Raipur (IIIT-NR), was established by the Government of Chhattisgarh with a mission to achieve excellence in higher education, research, and development in Information Technology (IT) and related fields. The institute is dedicated to the dissemination of knowledge and the cultivation of entrepreneurial skills among its students, empowering them to tackle real-world challenges effectively.</div>
               
                </div>
            </div>

            <div className="two-boxes-div2">
                <div>
                    <div className="about-us-small">
                    <h2>ABOUT HACK-A-SOL</h2>
                    </div>
                    <div className="small-content">Hack-A-Sol, the prestigious annual hackathon organized by IIIT-Naya Raipur (IIIT-NR), stands as a beacon of innovation and collaboration in the realm of technology and problem-solving. This pan-India event attracts some of the brightest minds from across the country, fostering a competitive yet cooperative environment where creativity meets practicality.Hack-A-Sol gathers students, developers, and tech enthusiasts to tackle real-world challenges through technology.</div>
                </div>
                <img src={iiit}></img>
            </div>
            
        </div>
    )
}