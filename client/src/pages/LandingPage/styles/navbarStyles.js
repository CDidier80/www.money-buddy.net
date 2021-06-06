import { makeStyles } from "@material-ui/core"

export const makeMobileNavlinkStyles = makeStyles(theme => {

    const { palette } = theme
    const { secondary } = palette
    
    const navlinkPsuedoClasses = {
        color: secondary.main,
        outline: "0!important",
        fontSize: "1.5rem",
        cursor: "pointer",
    }

    return ({

        navlink: {
            transition: "font-size .2s ease, color .3s ease-in-out,background-color .3s ease-in-out,opacity .3s ease-in-out",
            paddingLeft: "1.25rem!important",
            paddingRight: "1.25rem!important",
            textAlign: "-webkit-match-parent",
            textShadow: "0 1px 1px #265455",
            boxSizing: "border-box",
            textDecoration: "none",
            letterSpacing: "1px",
            fontSize: "1.4rem",
            display: "block",
            fontWeight: 700,
            marginBottom: 0,
            padding: "1rem",
            color: "white",
            ...theme.lato,
            "&:hover": {
                ...navlinkPsuedoClasses
            },
            "&:active": {
                ...navlinkPsuedoClasses
            },
            "&:focus": {
                ...navlinkPsuedoClasses
            }
        }
    })
})

export const makeNavlinkStyles = makeStyles(theme => {

    const {  palette } = theme
    const { primary } = palette
    
    const navlinkPsuedoClasses = {
        color: primary.main,
        outline: "0!important",
        fontSize: "1.5rem",
        cursor: "pointer",
    }

    return ({

        navlink: {
            transition: "font-size .2s ease, color .3s ease-in-out,background-color .3s ease-in-out,opacity .3s ease-in-out",
            paddingLeft: "1.25rem!important",
            paddingRight: "1.25rem!important",
            textAlign: "-webkit-match-parent",
            textShadow: "0 1px 1px #265455",
            boxSizing: "border-box",
            textDecoration: "none",
            letterSpacing: "1px",
            fontSize: "1.4rem",
            display: "block",
            fontWeight: 700,
            marginBottom: 0,
            padding: "1rem",
            color: "white",
            ...theme.lato,
            "&:hover": {
                ...navlinkPsuedoClasses
            },
            "&:active": {
                ...navlinkPsuedoClasses
            },
            "&:focus": {
                ...navlinkPsuedoClasses
            }
        }
    })
})