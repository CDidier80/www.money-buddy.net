import UnauthenticatedLinks from "./UnauthenticatedLinks"
import { makeNavlinkStyles } from "../../styles/navbarStyles";
import AuthenticatedLinks from "./AuthenticatedLinks"
import NavbarWrapper from "./NavbarWrapper"
import React from "react";

const LandingNavBar = props => {

    const {navlink} = makeNavlinkStyles(props.theme)


    return (
        <NavbarWrapper type={"default"}>
            {props.fromApp.authenticated ? 
                <AuthenticatedLinks { ...props } navlinkStyle={navlink}/> 
                : 
                <UnauthenticatedLinks navlinkStyle={navlink} />
            }
        </NavbarWrapper>
    )
};

export default LandingNavBar