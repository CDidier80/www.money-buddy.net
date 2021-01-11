import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';
// import { logs, firstLogs } from "./logs"

const DumbNavbar = (props) => {

    return (
        <nav className="dash-navbar" >
            <Link to="/" className="title-link">
                <span className="money">Money</span>
                Buddy
            </Link> 
            <IconButton 
                className="hamburger-iconbutton-wrapper" 
                style={{margin: "6px 0 0 6px"}
            }>
                <MenuIcon 
                    className="hamburger" 
                    fontSize="default" 
                    htmlColor={blueGrey[50]}
                />
            </IconButton> 

            <Link 
                className="sign-out-link" 
                to="#"
            >
                Sign Out
            </Link>

            <IconButton 
            >
                <AccountCircleIcon                     
                    className="account-icon" 
                    fontSize="default" 
                    htmlColor={blueGrey[50]}
                />
            </IconButton> 
        </nav>
    )
}

export default DumbNavbar
