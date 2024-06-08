import React from "react"
import Navbar from './Components/Navbar.jsx'
import MainText from "./Components/MainText.jsx"
import Loading from "./Components/Loading.jsx";

export default function App(){
    const [loading,setLoading]=React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setLoading(false),4000)
    },[])

        return(
            
            <div className="main">
               {loading && <Loading loading={loading}/>}
            {loading===false && <Navbar/>}
            {loading===false && <MainText/>}
            </div>

        )
}