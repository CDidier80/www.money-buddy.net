import { useMediaQuery } from '@material-ui/core'
import { NavLink, Link } from 'react-router-dom'
import React from 'react'
import { makeNavlinkStyles } from "../../styles/navbarStyles"

const AuthenticatedLinks = props => {

    const navlinkStyle = makeNavlinkStyles(props.theme)

    const { setAuthenticated, setUser } = props

    const logOut = (e) => {
        e.preventDefault()
        localStorage.clear()
        setAuthenticated(false)
        setUser(null)
    }

    const nssr = {noSsr: true}
    const maxWidth465 = useMediaQuery('(max-width: 465px)', nssr)
    const maxWidth320 = useMediaQuery('(max-width: 320px)', nssr)

    const responsiveStyles = {
        maxWidth465: {
            fontSize: "21px",
        },
        maxWidth320: {
            fontSize: "18px",
            paddingRight: 0,
        }
    }

    let currentRuleset
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
        ...currentRuleset
    }

    return (
        <>
            <NavLink
                className={navlinkStyle}
                to={"/dashboard/"}
                style={styles}
            >
                Dashboard
            </NavLink>
            <Link
                className={navlinkStyle}
                onClick={(e)=>logOut(e)}
                style={styles}
                to={"#"}
            >
                Sign Out
            </Link>
        </>
    )
}

export default AuthenticatedLinks