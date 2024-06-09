import cindrella from '../assets/cindrella.mp3'
import useSound from 'use-sound'
import React from 'react'
import HeadsetIcon from '@mui/icons-material/Headset';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';
import  IconButton  from "@mui/material/IconButton";
import {useState} from 'react'


export default function Music(){

    const [music , setMusic] = useState(false);
    const [play , {stop , pause} ] = useSound(cindrella);
    React.useEffect(()=>music ? play() : pause(),[music,play,pause])
    function togglemusic(){
        setMusic((prevstate)=>{
            return !prevstate
        })
    }
    return (
        <div className="music-button">
        <IconButton onClick={togglemusic} sx={{marginLeft:"4.8vh"}}>{music ? <HeadsetIcon sx={{color:"white" , fontSize:"30px"}}/> :<HeadsetOffIcon sx={{color:"white" , fontSize:"32px"}} /> }</IconButton>
        </div>
    )
}