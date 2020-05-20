import React, {useState} from 'react';
import './Navbar.css';
import {AppBar, Toolbar, IconButton, Icon, Typography, Button} from '@material-ui/core/';

const NavBar = (props) => {
    const [open, setOpen] = useState(false);
    const [className, setClassName] = useState(null);

    const handleClick = (event) => {
        if (Boolean(open)) {
            setClassName(null);
            setOpen(false);
        }
        else {
            setClassName("show");
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
                    <li key="1"><Button color="inherit"><a href="#">Home</a></Button></li>
                    <li key="2"><Button color="inherit"><a href="#">About</a></Button></li>
                    <li key="3"><Button color="inherit"><a href="#">Services</a></Button></li>
                    <li key="4"><Button color="inherit"><a href="#">Portfolio</a></Button></li>
                    <li key="5"><Button color="inherit"><a href="#">Contact</a></Button></li>
                </ul>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu" aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
                    <Icon>menu</Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;