import React from "react"
import Hack_logo from "../assets/Hac-a-sol_logo.png"

export default function Loading(props){
    return(
        <div className={props.loadin?"load-screen":""}>
            <img src={Hack_logo} className={props.loadin?"load-icon":""} loading="lazy"/>
        </div>
    )
}
