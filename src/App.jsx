import React from "react"
import Navbar from './Components/Navbar.jsx'
import MainText from "./Components/MainText.jsx"
import Music from './Components/music.jsx'

export default function App(){


    return(
        <div className="main">
        <Navbar/>
        <Music/>
        <MainText/>
        </div>
    )
}