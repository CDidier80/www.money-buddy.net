import UnauthenticatedLinks from "./UnauthenticatedLinks"
import AuthenticatedLinks from "./AuthenticatedLinks"
import NavbarWrapper from "./NavbarWrapper"
import React from "react"

const MobileNavBar = (props) => {

    return (
        <NavbarWrapper type={"mobile"}>
            {props.fromApp.authenticated ? 
                <AuthenticatedLinks {...props} /> 
                : 
                <UnauthenticatedLinks />
            }
        </NavbarWrapper>
    )
}

export default MobileNavBar