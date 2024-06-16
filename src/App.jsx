import React from "react"
import Home  from "./Components/Home.jsx"
import Music from './Components/music.jsx'
import Snackbar  from "./Components/Snackbar.jsx";
import Sponsor from "./Components/Sponsor.jsx"
import Tracks from "./Components/Tracks.jsx";
import Navbar from './Components/Navbar.jsx'
import ContactUs from './Components/ContactUs.jsx';
import AboutUs from "./Components/AboutUs.jsx"
// import ScrollToTop from "react-scroll-to-top";
import { orange } from "@mui/material/colors";

export default function App(){
    const d="M42.3426 4.65905C52.3732 4.65905 61.8284 8.60555 68.954 15.7312C76.107 22.8842 80.0261 32.3393 80.0261 42.3426V92.0574C80.0261 102.088 76.0796 111.543 68.954 118.669C61.801 125.822 52.3458 129.741 42.3426 129.741C32.3393 129.741 22.8568 125.794 15.7312 118.669C8.60555 111.543 4.65905 102.061 4.65905 92.0574V42.3426C4.65905 32.3119 8.60555 22.8568 15.7312 15.7312C22.8842 8.57814 32.3393 4.65905 42.3426 4.65905ZM42.3426 0C19.0473 0 0 19.0473 0 42.3426V92.0574C0 115.353 19.0473 134.4 42.3426 134.4C65.6378 134.4 84.6852 115.353 84.6852 92.0574V42.3426C84.7126 19.0473 65.6653 0 42.3426 0Z"
    const [loading,setLoading]=React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setLoading(false),4000)
    },[])
        return(
            
            <div className="main">
           {loading===false && <Navbar/>}
            <Home />
            {loading===false && <Music/>}
            {loading===false && <Snackbar/>}
            {loading==false && <AboutUs/>}
            {loading===false && <Tracks />}
            {loading===false && <Sponsor />}
            {loading===false && <ContactUs />}
            {/* <ScrollToTop smooth={true} color="orange" viewBox="0 0 85 135" /> */}
            </div>

        )
}
