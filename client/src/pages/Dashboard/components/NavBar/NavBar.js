import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';

const NavBar = (props) => {

    const { 
        narrow, 
        setSidebarNarrowed,
        ticker,
        setTicker
    } = props

    const logOut = (e) => {
        props.setAuth(false)
        props.setUserInfo(null)
        localStorage.clear()
        props.history.push("/")
    }

    const handleBurger = (e) => {
        e.preventDefault()
        console.log("burger's narrow prop: ", narrow)
        setSidebarNarrowed(narrow ? false : true) 
        setTicker(ticker + 1)
    }

    return (
        <nav className="dash-navbar" >
            <Link to="/" className="title-link">
                <span className="money">Money</span>
                Buddy
            </Link> 
            <IconButton 
                onClick={(e)=>handleBurger(e)} 
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
                onClick={()=>logOut()}
            >
                Sign Out
            </Link>

            <IconButton 
                onClick={()=> props.history.push("/dashboard/account")}>
                <AccountCircleIcon                     
                    className="account-icon" 
                    fontSize="default" 
                    htmlColor={blueGrey[50]}
                />
            </IconButton> 
        </nav>
    )
}

export default NavBar
