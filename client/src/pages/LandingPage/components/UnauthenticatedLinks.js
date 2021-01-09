import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const UnauthenticatedLinks = () => {
    return (
        <>
            <NavLink 
                to={{ pathname: "/login", state: { isSigningUp: true  } }}  
                className="navlink" 
            > 
                Sign Up 
            </NavLink> 
            <NavLink 
                to={{ pathname: "/login", state: { isSigningUp: false } }}  
                className="navlink" 
            > 
                Sign In 
            </NavLink>
        </>
    )
}

export default UnauthenticatedLinks