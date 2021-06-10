import UnauthenticatedLinks from "./UnauthenticatedLinks"
import AuthenticatedLinks from "./AuthenticatedLinks"
import NavbarWrapper from "./NavbarWrapper"
import React from "react";

const LandingNavBar = props => {
    return (
        <NavbarWrapper type={"default"}>
            {props.authenticated ?
                <AuthenticatedLinks { ...props } navlinkStyle={navlink}/>
                :
                <UnauthenticatedLinks navlinkStyle={navlink} />
            }
        </NavbarWrapper>
    )
}

export default LandingNavBar