import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/images/carousel-img/one.png";
import img2 from "../assets/images/carousel-img/two.png";
import img3 from "../assets/images/carousel-img/three.png";
import img4 from "../assets/images/carousel-img/four.png";
import img5 from "../assets/images/carousel-img/five.png";
import img6 from "../assets/images/carousel-img/six.png";
import img7 from "../assets/images/carousel-img/seven.png";
import img8 from "../assets/images/carousel-img/eight.png";
import img9 from "../assets/images/carousel-img/nine.png";
import img10 from "../assets/images/carousel-img/ten.png";

function Carousel() {
  return (
    <div className="relay">

      <div>
        <Marquee speed={100} delay={0}>
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
          <div>
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
