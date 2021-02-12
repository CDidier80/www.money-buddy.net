import { NavLink, Link } from "react-router-dom"
import React from "react"

const AuthenticatedLinks = (props) => {

    const { setAuth, setUserInfo } = props.fromApp

    const logOut = (e) => {
        e.preventDefault()
        localStorage.clear()
        setAuth(false)
        setUserInfo(null)
    }

    return (
        <>
            <NavLink 
                to={"/dashboard/"}  
                className="mobile navlink" 
            > 
                Dashboard 
            </NavLink> 
            <Link 
                className="mobile navlink" 
                onClick={(e)=>logOut(e)}
                to={"#"}
            >
                Sign Out
            </Link>
        </>
    )
}

export default AuthenticatedLinks