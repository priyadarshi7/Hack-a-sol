import React from "react";
import Marquee from "react-fast-marquee";

import img11 from "../assets/images/carousel-img/11.png";
import img12 from "../assets/images/carousel-img/12.png";
import img13 from "../assets/images/carousel-img/13.png";
import img14 from "../assets/images/carousel-img/14.png";
import img15 from "../assets/images/carousel-img/15.png";
import img16 from "../assets/images/carousel-img/16.png";
import img17 from "../assets/images/carousel-img/17.png";
import img18 from "../assets/images/carousel-img/18.png";
import img19 from "../assets/images/carousel-img/19.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init(); 
function Carousel2() {
  return (
    <div className="relay" data-aos="zoom-in" data-aos-delay="600">

      <div>
        <Marquee speed={150} delay={0} autoFill={true} direction="right">
          <div className="image_wrapper">
            <img src={img11} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img12} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img13} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img14} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img15} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img16} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img17} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img18} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img19} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Carousel2;
