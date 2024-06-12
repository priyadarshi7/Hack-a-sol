import React from "react"
import Carousel from "./Carousel.jsx"

export default function Sponsor(){
    return(
        <div className="sponsor-container">
            <div className="sponsor-heading">
                <h2>PAST SPONSORS</h2>
            </div>
            <div className="marquee">
            <Carousel />
            </div>
            <div className="head-2">
            <h2>Want to become a <span className="txt">Sponsor</span></h2>
            <h2> of Hack-a-Sol 3.0 ?</h2>
            <button>BECOME A SPONSOR</button>
            </div>
        </div>
    )
}