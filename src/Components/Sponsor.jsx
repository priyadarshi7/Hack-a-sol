import React from "react"
import Carousel from "./Carousel.jsx"
import Carousel2 from "./Carousel2.jsx"

export default function Sponsor(){
    return(
        <div className="sponsor-container" id="Past Sponsors">
            <div className="sponsor-heading">
                <h2>PAST SPONSORS</h2>
            </div>
            <div className="marquee">
            <Carousel />
            <Carousel2 />
            </div>
            <div className="head-2">
            <h2>Want to become a <span className="txt">Sponsor</span></h2>
            <h2> of Hack-a-Sol 3.0 ?</h2>
            <button onClick={() => window.open('https://forms.gle/4piXZrHb2XCUw7Gm6 ', '_main')}>BECOME A SPONSOR</button>
            </div>
        </div>
    )
}