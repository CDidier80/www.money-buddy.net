import { makeStyles } from "@material-ui/core"

// export const makeNavlinkStyles = makeStyles(theme => {

//     const { gradients, palette, boxShadows } = theme
//     const { primary, primaryBright, secondary, primaryDark } = palette

//     const navbarConstants = {
//         WebkitTransition: "all .3s ease 0s",
//         transition: "all .3s ease 0s",
//         justifyContent: "flex-start",
//         boxSizing: "border-box",
//         flexFlow: "row nowrap",
//         alignItems: "center",
//         display: "flex",
//         zIndex: 1030,
//         padding: 0,

//     }

//     const navlinkPsuedoClasses = {
//         color: primary.main,
//         outline: "0!important",
//         fontSize: "1.5rem",
//         cursor: "pointer",
//     }

//     const container = {
//         margin: "auto, 15px, auto, 15px",
//         padding: "auto, 15px, auto, 15px",
//         justifyContent: "flex-end",
//         boxSizing: "border-box",
//         alignItems: "center",
//         flexWrap: "nowrap",
//         maxWidth: "720px",
//         display: "flex",
//         width: "100%",
//     }

//     const unorderedLinks = {
//         animation: "fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 500ms both",
//         WebkitNnimation:`fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 500ms both, slide .2s`,
//         marginLeft: "auto!important",
//         paddingInlineStart: "40px",
//         marginInlineStart: "0px",
//         marginBlockStart: "1em",
//         boxSizing: "borderBox",
//         marginInlineEnd: "0px",
//         marginBlockEnd: "1em",
//         flexDirection: "row",
//         position: "relative",
//         listStyle: "none",
//         flexWrap: "wrap",
//         display: "flex",
//         marginBottom: 0,
//         paddingLeft: 0,
//         marginTop: 0,   
//     }

//     return ({
//         navbar: {
//             ...navbarConstants,
//             minHeight: "90px",
//             position: "fixed",
//             right: 0,
//             left: 0,
//             top: 0,
//         },

//         mobileNavbar: {
//             ...navbarConstants,
//             maxHeight: "45px",
//             marginTop: "15vh",
//         },

//         container: {
//             ...container,
//         },

//         "container mobile": {
//             ...container,
//             maxHeight: "45px",
//             margin: "0 auto",
//         },

//         linkbar: {
//             display: "flex!important",
//             background: "transparent",
//             boxSizing: "border-box",
//             alignItems: "center",
//             position: "relative",
//             borderRight: "none",
//             flexBasis: "auto",
//             height: "auto",
//             width: "auto",
//             flexGrow: 1,
//             margin: 0,
//             bottom: 0,
//             right: 0,
//             top: 0,
//         },

//         unorderedLinks: {
//             ...unorderedLinks,
//         },

//         "unordered-links mobile": {
//             ...unorderedLinks,
//             margin: "auto",
//             padding: 0,
//         },

//         navlink: {
//             transition: "font-size .2s ease, color .3s ease-in-out,background-color .3s ease-in-out,opacity .3s ease-in-out",
//             paddingLeft: "1.25rem!important",
//             paddingRight: "1.25rem!important",
//             textAlign: "-webkit-match-parent",
//             textShadow: "0 1px 1px #265455",
//             boxSizing: "border-box",
//             textDecoration: "none",
//             letterSpacing: "1px",
//             fontSize: "1.4rem",
//             display: "block",
//             fontWeight: 700,
//             marginBottom: 0,
//             padding: "1rem",
//             color: "white",
//             ...theme.lato,
//             "&:hover": {
//                 ...navlinkPsuedoClasses
//             },
//             "&:active": {
//                 ...navlinkPsuedoClasses
//             },
//             "&:focus": {
//                 ...navlinkPsuedoClasses
//             }
//         }
        

//     })
// })


export const makeMobileNavlinkStyles = makeStyles(theme => {

    const { gradients, palette, boxShadows } = theme
    const { primary, primaryBright, secondary, primaryDark } = palette
    
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

    const { gradients, palette, boxShadows } = theme
    const { primary, primaryBright, secondary, primaryDark } = palette
    
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