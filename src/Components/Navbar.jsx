import React from "react"
import sac_logo from "../assets/sac-logo.png"
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


export default function Navbar(){


    const [showham , setShowham] = useState(false);

    function toggleham(){
        setShowham((prevstate)=>{
            return !prevstate
        })
    }

    const list_items = (
        <Box sx={{width:150 }}>
            <List>
                {["About Us" , "Sechdule", "Prizes" , "Tracks" , "Contact Us"].map((item,key)=>{
                    return <ListItem key={key}>
                        <ListItemText>{item}</ListItemText>
                    </ListItem>
                })}
            </List>
        </Box>
    )
    return (
        <div className="navbar">
         <a href="https://sac.iiitnr.ac.in/" className="logo">
         <img src={sac_logo}></img>
         </a>  
            <ul className="navbar-list">
                <li>About Us</li>
                <li>Schedule</li>
                <li>Prizes</li>
                <li>Tracks</li>
                <li>Contact Us</li>
            </ul>
            <div id="ham-button">
            <IconButton onClick={toggleham}><MenuIcon color="info" sx={{fontSize:"50px" , color:"white"}}/></IconButton>
            </div>
            <Drawer open={showham} anchor="right" onClose={toggleham}  sx={{ backgroundColor:"hsba(340, 8%, 14%, 1)"}}>
                {list_items}
            </Drawer>
           

        </div>
    )
}