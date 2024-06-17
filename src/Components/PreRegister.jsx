import React from "react"
import Hack from "../assets/images/final hackasol logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import profile from "../assets/images/profile.png"

export default function PreRegister(props){
    let style={
        display:props.showModal?"block":"none",
    }
    let style2={
        display:props.showModal?"flex":"none",
    }
    return(
        <div className={props.showModal?"forms":""} style={style2}>
        <div className={props.showModal?"form-container-main":""}>
          <h3>WELCOME TO</h3>
          <div className={props.showModal?"form-img":""}><img src={Hack} style={style}/></div>
          <div className={props.showModal?"form-container":""}>
              <form className={props.showModal?"forms-form":""}>
                  <input type="text" placeholder="Name" id="name" style={style}/>
                  <input type="text" placeholder="College Name" id="college" style={style}/>
                  <input type="email" placeholder="Your Email" id="mail" style={style}/>
                  <div class="mob-number">
                      <div style={style2} className={props.showModal?"phone-code":""}>+91</div>
                      <input type="number" placeholder="Mobile Number" id="mobile" style={style}/>
                  </div>
                  <div className="modal-button" style={style2}>
                  <button style={style} onClick={props.closeModal}>CLOSE</button>
                  <button style={style}>PRE-REGISTER</button>
                  </div>
              </form>
          </div>
      </div>
      </div>
    )
}