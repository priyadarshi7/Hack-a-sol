import React from "react"
import Home  from "./Components/Home.jsx"
import Music from './Components/music.jsx'
import Snackbar  from "./Components/Snackbar.jsx";
import Sponsor from "./Components/Sponsor.jsx"
import Tracks from "./Components/Tracks.jsx";
import Navbar from './Components/Navbar.jsx'
import ContactUs from './Components/ContactUs.jsx';
import AboutUs from "./Components/AboutUs.jsx"
import ScrollToTop from "react-scroll-to-top";
import PreRegister from "./Components/PreRegister.jsx";
import Community from "./Components/Community.jsx";
import Timeline from "./Components/Timeline.jsx";
import Sponsors from "./Components/Sponsors.jsx";
import Teams from "./Components/Shortlisted_Teams/Teams.jsx";
import JudgeMain from "./Components/Judges/JudgeMain/JudgeMain.jsx";
import ProblemStatement from "./Components/Problem_Statement/ProblemStatement.jsx";
import GitPage from "./Components/GitPage/GitPage.jsx";

export default function App(){
    const d="M24.37 0.1521V3.49566C24.4796 3.49566 24.6714 3.52306 24.8085 3.6875L44.5957 25.3384C44.6505 25.4206 44.8698 25.6399 44.7054 25.9961C44.5409 26.3524 44.2669 26.3524 44.1572 26.3524C41.0055 26.3524 38.2375 28.3531 37.2235 31.3404L24.9181 67.8454C24.8907 67.955 24.781 68.2565 24.3426 68.2565C23.9041 68.2565 23.8218 67.9824 23.767 67.8454L11.4616 31.3404C10.4476 28.3531 7.67958 26.3524 4.52787 26.3524C1.37616 26.3524 4.14418 26.3524 3.97975 25.9961C3.81531 25.6399 4.00715 25.4206 4.08937 25.3384L23.8766 3.6875C24.0137 3.52306 24.2055 3.49566 24.3151 3.49566V0.1521M24.3151 0.1521C23.2463 0.1521 22.1775 0.590602 21.3827 1.44019L1.59541 23.0911C-0.734119 25.6399 1.07469 29.7234 4.52787 29.7234C7.98105 29.7234 7.7344 30.8196 8.28252 32.4092L20.5879 68.9142C21.1908 70.6956 22.753 71.6001 24.3426 71.6001C25.9321 71.6001 27.4943 70.6956 28.0972 68.9142L40.4026 32.4092C40.9507 30.7922 42.458 29.7234 44.1572 29.7234C47.583 29.7234 49.3918 25.6399 47.0897 23.0911L27.3024 1.44019C26.5076 0.590602 25.4388 0.1521 24.37 0.1521H24.3151Z"
    const [loading,setLoading]=React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setLoading(false),4000)
    },[])
    const scrollStyle={
     border:"2px solid orange",
     height:"55px",
     width:"40px"
    }

    let [showModal,setShowModal]=React.useState(false);


    function modalAppear(){
        setShowModal(prev=>!prev);
    }
    function closeModal(e){
        e.preventDefault();
        setShowModal(prev=>!prev)
    }

        return(

            <div className="main">
            {loading===false && <Navbar/>}
            {loading===false && <PreRegister showModal={showModal} closeModal={closeModal}/>}
            <Home modalAppear={modalAppear}/>
            {loading===false && <Music/>}
            {loading===false && <Snackbar/>}
            {loading===false && <ProblemStatement/>}
            {loading===false && <Teams/>}
            {loading===false && <JudgeMain/>}
            {loading===false && <GitPage/>}
            {loading===false && <Sponsors/>}
            {loading===false && <Community/>}
            {loading===false && <AboutUs/>}
            {loading===false && <Timeline/>}
            {loading===false && <Tracks />}
            {loading===false && <Sponsor />}
            {loading===false && <ContactUs />}
            <ScrollToTop className="scroll-top" smooth={true} color="orange" viewBox="0 0 49 72" svgPath={d} style={scrollStyle}/>
            </div>

        )
}
