// import React from "react"
// import MainText from "./MainText.jsx"
// import Loading from "./Loading.jsx";
// import BgVideo from "../assets/Videos/BG_6mb.mp4"

// export default function Home(){
//     const [loading,setLoading]=React.useState(true);
//     React.useEffect(()=>{
//         setTimeout(()=>setLoading(false),4000)
//     },[])
//     return(
//         <div className="home" id="Home">
//         <video autoPlay loop muted className="vid"><source src={BgVideo} type="video/mp4" /> </video>
//         {loading && <Loading loading={loading}/>}
//         {loading===false && <MainText/>}
//             </div>
//     )
// }

import React, { useState, useEffect } from "react";
import MainText from "./MainText.jsx";
import Loading from "./Loading.jsx";
import BgVideo from "../assets/Videos/BG_6mb.mp4";

export default function Home(props) {
  // const [loading, setLoading] = useState(true);
  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // useEffect(() => {
   // setTimeout(() => setLoading(false), 4000);

  //   const video = document.querySelector('.vid');
  //   const handleLoadedData = () => {
  //     setIsVideoLoaded(true);
  //   };

  //   video.addEventListener('loadeddata', handleLoadedData);

  //   return () => {
  //     video.removeEventListener('loadeddata', handleLoadedData);
  //   };
  // }, []);

  return (
    <div className="home" id="Home">
      <video autoPlay loop muted className="vid">
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div style={{ height: '100vh', backgroundColor: 'black' }}></div>
      <MainText modalAppear={props.modalAppear}/>
    </div>
  );
}
