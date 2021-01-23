import React from 'react'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import blueGrey from '@material-ui/core/colors/blueGrey'


const Burger = (props) => {

    /* ---------- PROPS---------- */

    const { 
        userPreference,
        setUserPreference,
        ticker,
        setTicker
    } = props.fromDashboard


    /* ------------- click handler ----------- */

    const handleBurger = (e) => {
        e.preventDefault()
        switch (userPreference) {
            case "open":   
                console.log("user closed sidebar")
                // if (window.innerWidth <= 600) {
                //     setUserPreference("open")
                // } else {
                    setUserPreference("closed")
                // }
                break
            case "closed":
                console.log("user opened sidebar")
                setUserPreference("open")
                break
            case "": 
                const smallScreen = window.innerWidth <= 600
                console.log("user set a preference")
                setUserPreference(smallScreen ? "open" : "closed")
        }
        setTicker(ticker + 1)
    }

    const iconStyle = {margin: "6px 0 0 6px"}

    return (
        <IconButton 
            onClick={(e)=>handleBurger(e)} 
            className="hamburger-iconbutton-wrapper" 
            style={iconStyle}
        >
            <MenuIcon 
                className="hamburger" 
                fontSize="default" 
                htmlColor={blueGrey[50]}
            />
        </IconButton> 
    )
}

export default Burger
