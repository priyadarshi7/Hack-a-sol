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
import img11 from "../assets/images/carousel-img/11.png";
import img12 from "../assets/images/carousel-img/12.png";
import img13 from "../assets/images/carousel-img/13.png";
import img14 from "../assets/images/carousel-img/14.png";
import img15 from "../assets/images/carousel-img/15.png";
import img16 from "../assets/images/carousel-img/16.png";
import img17 from "../assets/images/carousel-img/17.png";
import img18 from "../assets/images/carousel-img/18.png";
import img19 from "../assets/images/carousel-img/19.png";

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

export default Carousel;
