import React from "react"
import './JudgeMain.css'
import JudgeCard from "../JudgeCard/JudgeCard"
import JudgeData from "../../../Data/JudgeData"

export default function JudgeMain(){
    return(
        <div className="team-main">
                     <div className="com-head" data-aos="zoom-in" style={{marginBottom:"0"}}>
                <h2>JUDGES</h2>
            </div>
            <div className="team">
                {
                    JudgeData.map((data,index)=>{
                        return <JudgeCard name={data.name} designation={data.designation} linkedIn={data.linkedIn} image={data.img} key={index}/>
                    })
                }
            </div>
        </div>
    )
}