import AccountPageLink from "./components/AccountPageLink"
import LandingPageLink from "./components/LandingPageLink"
import SignOutLink from "./components/SignOutLink"
import React, {useState, useEffect} from 'react'
import Burger from "./components/Burger"

const NavBar = (props) => {

    return (
        <nav className="dash-navbar">
            <LandingPageLink />
            <Burger 
                {...props}
            />
            {/* <h2 style={{color:"white", fontSize:"25px"}}>{size}</h2> */}
            <SignOutLink 
                {...props}
            />
            <AccountPageLink 
                {...props}
            />
        </nav>
    )
}

export default NavBar
