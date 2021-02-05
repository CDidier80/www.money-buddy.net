import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import blueGrey from '@material-ui/core/colors/blueGrey'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'

const DumbNavbar = () => {

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
                    htmlColor={blueGrey[50]}
                    className="hamburger" 
                    fontSize="default" 
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
                    htmlColor={blueGrey[50]}
                    fontSize="default" 
                />
            </IconButton> 
        </nav>
    )
}

export default DumbNavbar
