import { useMediaQuery } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import React from "react"
import { makeNavlinkStyles } from "../../styles/navbarStyles"

const UnauthenticatedLinks = props => {

    const navlinkStyle = makeNavlinkStyles(props.theme)

    const nssr = { noSsr: true }
    const maxWidth465 = useMediaQuery('(max-width: 465px)', nssr)
    const maxWidth320 = useMediaQuery('(max-width: 320px)', nssr)

    const responsiveStyles = {
        maxWidth465: {
            ...props.hoverColor,
            fontSize: "21px",
        },
        maxWidth320: {
            ...props.hoverColor,
            fontSize: "18px",
            paddingRight: 0,
        }
    }

    let currentRuleset = {}
    switch (true){
        case maxWidth320:
            currentRuleset = responsiveStyles.maxWidth320
            break
        case maxWidth465:
            currentRuleset = responsiveStyles.maxWidth465
            break
        default:
            // console.log("no matching cases.")
    }

    const styles = {
        ...props.hoverColor,
        ...currentRuleset,
    }

    return (
        <>
            <NavLink
                to={{ pathname: "/login", state: { signingUp: true  } }}
                className={navlinkStyle}
                style={styles}
            >
                Sign Up
            </NavLink>
            <NavLink
                to={{ pathname: "/login", state: { signingUp: false } }}
                className={navlinkStyle}
                style={styles}
            >
                Sign In
            </NavLink>
        </>
    )
}

export default UnauthenticatedLinks