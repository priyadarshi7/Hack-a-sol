import React from "react"
import Home  from "./Components/Home.jsx"
import Music from './Components/music.jsx'
import Snackbar  from "./Components/Snackbar.jsx";
import Sponsor from "./Components/Sponsor.jsx"
import Tracks from "./Components/Tracks.jsx";
import Navbar from './Components/Navbar.jsx'
import ContactUs from './Components/ContactUs.jsx';
import AboutUs from "./Components/AboutUs.jsx"

export default function App(){

    const [loadin,setLoading]=React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setLoading(false),4000)
    },[])
        return(
            
            <div className="main">
           {loadin===false && <Navbar/>}
            <Home />
            {loadin===false && <Music/>}
            {loadin===false && <Snackbar/>}
            {loadin==false && <AboutUs/>}
            {loadin===false && <Tracks />}
            {loadin===false && <Sponsor />}
            {loadin===false && <ContactUs />}
            </div>

        )
}