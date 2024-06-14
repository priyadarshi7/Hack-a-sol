import React from "react"
import sac_logo from "../assets/Hac-a-sol_logo.png"
import {useState} from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import  IconButton  from "@mui/material/IconButton";
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { PlaylistAdd } from "@mui/icons-material";



export default function Navbar(){


    const [showham , setShowham] = useState(false);
  
    // const [switch_mus , setSwitch] = useState(true);


    function toggleham(){
        setShowham((prevstate)=>{
            return !prevstate
        })
    }

   

 
    const listitems=["About Us" , "Tracks", "Past Sponsors" , "Contact Us"];
    const liststyle={
        cursor:"pointer",
    }

    const list_items = (
        <Box sx={{width:150}}>
            <List>
                {listitems.map((item,key)=>{
                    return <ListItem key={key}>
                        <ListItemText onClick={() => window.location=`#${item}`} style={liststyle}>{item}</ListItemText>
                    </ListItem>
                })}
            </List>
        </Box>
    )
    return (
        <>
        <div className="navbar">
         <a href="https://sac.iiitnr.ac.in/" className="logo">
         <img src={sac_logo}></img>
         </a>  
            <ul className="navbar-list">
                <li onClick={() => window.location='#About Us'}>About Us</li>
                <li onClick={() => window.location='#Tracks'}>Tracks</li>
                <li onClick={() => window.location='#Past Sponsors'}>Past Sponsors</li>
                <li onClick={() => window.location='#Contact Us'}>Contact Us</li>
            </ul>
            <div id="ham-button">
            <IconButton onClick={toggleham}><MenuIcon color="info" sx={{fontSize:"50px" , color:"white"}}/></IconButton>
            </div>
            
            <Drawer open={showham} anchor="right" onClose={toggleham}  sx={{ backgroundColor:"hsba(340, 8%, 14%, 1)"}}   PaperProps={{sx: { backgroundColor: 'rgba(255, 255, 255, .10)',
            backdropFilter: 'blur(5px)', color:'white', width:'50%', border:'1px solid rgb(255, 95, 31)', borderRight:'0px',borderTop:'0px'}}}>
                {list_items}
            </Drawer>
        </div>
        </>
    )
}