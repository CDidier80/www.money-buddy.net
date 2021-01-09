import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const AuthenticatedLinks = ({setAuth, setUserInfo}) => {

    const logOut = (e) => {
        setAuth(false)
        setUserInfo(null)
        localStorage.clear()
    }

    return (
        <>
            <NavLink 
                to={"/dashboard/"}  
                className="navlink" 
            > 
                Dashboard 
            </NavLink> 
            <Link 
                to={"#"}
                className="navlink" 
                onClick={()=>logOut()}
            >
                Sign Out
            </Link>
        </>
    )
}

export default AuthenticatedLinks