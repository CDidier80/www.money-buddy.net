import React, {useState, useEffect} from 'react'
import AccountPageLink from "./components/AccountPageLink"
import LandingPageLink from "./components/LandingPageLink"
import SignOutLink from "./components/SignOutLink"
import Burger from "./components/Burger"

const NavBar = (props) => {


    const [size, setSize] = useState(`${window.innerWidth} x ${window.innerHeight}`)

    const reportSize = (e) => {
        setSize(`${window.innerWidth} x ${window.innerHeight}`)
    }

    useEffect(() => {
        window.addEventListener("resize", reportSize)
        return () => {
            window.removeEventListener("resize", reportSize)
        }
    }, [])
    return (
        <nav className="dash-navbar">
            <LandingPageLink />
            <Burger 
                {...props}
            />
            <h2 style={{color:"white", fontSize:"30px"}}>{size}</h2>
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
