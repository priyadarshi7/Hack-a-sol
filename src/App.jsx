import React from "react"
import Home  from "./Components/Home.jsx"
import Music from './Components/music.jsx'
import Snackbar  from "./Components/Snackbar.jsx";
import Sponsor from "./Components/Sponsor.jsx"
import Tracks from "./Components/Tracks.jsx";

export default function App(){

    const [loading,setLoading]=React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setLoading(false),4000)
    },[])
        return(
            
            <div className="main">
            <Home />
            {loading===false && <Music/>}
            {loading===false && <Snackbar/>}
            {loading===false && <Sponsor />}
            {loading===false && <Tracks />}
            </div>

        )
}