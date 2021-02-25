import React from 'react'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import blueGrey from '@material-ui/core/colors/blueGrey'


const Burger = (props) => {

    /* ---------- PROPS---------- */

    const { 
        ticker,
        setTicker,
        userPreference,
        setUserPreference,
    } = props.fromDashboard

    /* ------------- click handler ----------- */

    const handleBurger = (e) => {
        e.preventDefault()
        switch (userPreference) {
            case "open":   
                setUserPreference("closed")
                break
            case "closed":
                setUserPreference("open")
                break
            case "": 
                const smallScreen = window.innerWidth <= 600
                setUserPreference(smallScreen ? "open" : "closed")
        }
        setTicker(ticker + 1)
    }

    const iconStyle = {margin: "6px 0 0 6px"}

    return (
        <IconButton 
            className="hamburger-iconbutton-wrapper" 
            onClick={(e)=>handleBurger(e)} 
            style={iconStyle}
        >
            <MenuIcon 
                htmlColor={blueGrey[50]}
                className="hamburger" 
                fontSize="default" 
            />
        </IconButton> 
    )
}

export default Burger
