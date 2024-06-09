import React from "react"

export default function Loading(props){
    return(
        <div className={props.loading?"load-screen":""}>
            <div className={props.loading?"load-icon":""}></div>
        </div>
    )
}
