import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/images/carousel-img/1.png";
import img2 from "../assets/images/carousel-img/2.png";
import img3 from "../assets/images/carousel-img/3.png";
import img4 from "../assets/images/carousel-img/4.png";
import img5 from "../assets/images/carousel-img/5.png";
import img6 from "../assets/images/carousel-img/6.png";
import img7 from "../assets/images/carousel-img/7.png";
import img8 from "../assets/images/carousel-img/8.png";
import img9 from "../assets/images/carousel-img/9.png";
import img10 from "../assets/images/carousel-img/10.png";

function Carousel() {
  return (
    <div className="relay">

      <div>
        <Marquee speed={150} delay={0} autoFill={true}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Carousel;
