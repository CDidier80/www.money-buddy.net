import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const UnauthenticatedLinks = () => {
    return (
        <>
            <NavLink 
                to={{ pathname: "/login", state: { signingUp: true  } }}  
                className="navlink mobile" 
            > 
                Sign Up 
            </NavLink> 
            <NavLink 
                to={{ pathname: "/login", state: { signingUp: false } }}  
                className="navlink mobile" 
            > 
                Sign In 
            </NavLink>
        </>
    )
}

export default UnauthenticatedLinks