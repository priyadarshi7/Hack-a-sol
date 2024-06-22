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

    const id=React.useId();
    return(
        <div className={props.showModal?"forms":""} style={style2}>
        <div className={props.showModal?"form-container-main":""}>
          <h3>WELCOME TO</h3>
          <div className={props.showModal?"form-img":""}><img src={Hack} style={style}/></div>
          <div className={props.showModal?"form-container":""}>
              <form className={props.showModal?"forms-form":""} action="https://back-w65f.onrender.com/register" method="POST">
                  {/*Name*/}
                  <label htmlFor={id}>Name</label>
                  <input required type="text" placeholder="Name" id={id} name="name" style={style}/>
                  {/*Email, address and branch*/}
                  <div className="form-boxes">
                  <div className="form-box">
                  {/*Email*/}
                  <label htmlFor={id}>Email</label>
                  <input required type="email" placeholder="Your Email" id="mail" name="email" style={style}/>
                  {/*Email*/}
                  <label htmlFor={id}>Address (City)</label>
                  <input required type="text" placeholder="Address(City)" id={id} name="address" style={style}/>
                  {/*Phone Number*/}
                  <label htmlFor={id}>Phone Number</label>
                  <div class="mob-number" id={id}>
                      {/* <div style={style2} className={props.showModal?"phone-code":""}>+91</div> */}
                      <input required type="text" className="phone" placeholder="Mobile Number" id={id} name="p_number" style={style} pattern="[0-9]{11}"/><span class="validity" ></span>
                  </div>
                  </div>
                  {/* Branch,Year and College Name */}
                  <div className="form-box">
                    {/*Branch*/}
                  <label htmlFor={id}>Branch</label>
                  {/*Year*/}
                  <input required type="text" placeholder="Branch" id={id} name="branch" style={style}/>
                  <label htmlFor={id}>Passout Year (20XX)</label>
                  <input required type="year" placeholder="Year" id="year" name="year" style={style}/>
                  {/*College Name*/}
                  <label htmlFor={id}>College Name</label>
                  <input required type="text" placeholder="College Name" id="college" name="c_name" style={style}/>
                  </div>
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