import { makeMobileNavlinkStyles } from "../../styles/navbarStyles"
import UnauthenticatedLinks from "./UnauthenticatedLinks"
import AuthenticatedLinks from "./AuthenticatedLinks"
import NavbarWrapper from "./NavbarWrapper"
import React from "react"

const MobileNavBar = props => {

    const { navlink } = makeMobileNavlinkStyles(props.theme)

    return (
        <NavbarWrapper type={"mobile"}>
            {props.fromApp.authenticated ? 
                <AuthenticatedLinks { ...props } navlinkStyle={navlink} /> 
                : 
                <UnauthenticatedLinks navlinkStyle={navlink}/>
            }
        </NavbarWrapper>
    )
}

export default MobileNavBar