import React from "react"
import Navbar from './Components/Navbar.jsx'
import MainText from "./Components/MainText.jsx"
import Loading from "./Components/Loading.jsx";
import BgVideo from "./assets/BG_video.mp4"
import Music from './Components/music.jsx'
import Snackbar  from "./Components/Snackbar.jsx";

export default function App(){
    const [loading,setLoading]=React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setLoading(false),4000)
    },[])

        return(
            
            <div className="main">
                <video autoPlay loop muted className="vid"><source src={BgVideo} type="video/mp4" /> </video>
            {loading && <Loading loading={loading}/>}
            {loading===false && <Navbar/>}
            {loading===false && <MainText/>}
            {loading===false && <Music/>}
            {loading===false && <Snackbar/>}
            </div>

        )
}