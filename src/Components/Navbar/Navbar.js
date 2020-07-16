import React, {useState} from 'react';
import './Navbar.css';
import {AppBar, Toolbar, IconButton, Icon, Typography, Button} from '@material-ui/core/';

//This component creates a navbar that collapses on screens smaller than 769px
/*
PROPS LIST:
    none
*/
const Navbar = (props) => {
    //this is a boolean state that keeps track of whether the smaller-screen menu is open or not
    const [open, setOpen] = useState(false);
    //this is a string state that stores a class name for the list of links
    const [className, setClassName] = useState(null);

    //this function runs when the MenuIcon is pressed on smaller screen sizes
    const handleClick = (event) => {
        //if the state of the navbar is already open,
        if (Boolean(open)) {
            //remove the class name that allows the nav list to be displayed
            setClassName(null);
            //toggle the open state to false
            setOpen(false);
        }
        //otherwise if the navbar is closed
        else {
            //give the nav list the class name that allows it to be displayed
            setClassName("show");
            //toggle the open state to true
            setOpen(true);
        }
    };

    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Typography variant="h5" className="menuTitle">
                    Nathaniel Grimsley
                </Typography>
                <ul className={`navbar__link-list ${className}`}>
                    <li key="1"><Button color="inherit"><a href="#Home">Home</a></Button></li>
                    <li key="2"><Button color="inherit"><a href="#About">About</a></Button></li>
                    <li key="3"><Button color="inherit"><a href="#Experience">Experience</a></Button></li>
                    <li key="4"><Button color="inherit"><a href="#Portfolio">Portfolio</a></Button></li>
                    <li key="5"><Button color="inherit"><a href="#Contact">Contact</a></Button></li>
                </ul>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
                    <Icon>menu</Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;