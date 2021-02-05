import UnauthenticatedLinks from "./UnauthenticatedLinks"
import AuthenticatedLinks from "./AuthenticatedLinks"
import NavbarWrapper from "./NavbarWrapper"
import React from "react";

const LandingNavBar = (props) => {

    return (
        <NavbarWrapper type={"default"}>
            {props.fromApp.authenticated ? 
                <AuthenticatedLinks {...props} /> 
                : 
                <UnauthenticatedLinks />
            }
        </NavbarWrapper>
    )
};

export default LandingNavBar