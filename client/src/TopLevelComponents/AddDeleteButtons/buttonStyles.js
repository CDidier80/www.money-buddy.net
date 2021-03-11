import { makeStyles } from '@material-ui/core/'


export const useButtonStyles = (theme, props) => {

    const { palette: p, lato } = theme

    const variant = props.variant || "primary"

    // responsive styles are deconstructed into buttonConstants
    const buttonConstants = {
        ...lato,
        fontSize: "13px",
        padding: "0 5px 0 5px",
        fontWeight: "700",
    }


    // primary and secondary color alternatives are set
    const colors = {
        primary: {
            delButtonIconsToggled:  p.secondaryDark.main,
            addButton:              p.primaryDark.main,
            buttonGroup:            p.primaryDark.main,
            delButtonNoIcons:       p.primaryDark.main,
        },

        secondary: {
            delButtonIconsToggled:  p.primaryDark.main,
            addButton:              p.secondaryDark.main,
            buttonGroup:            p.secondaryDark.main,
            delButtonNoIcons:       p.secondaryDark.main,
        },
    }

    const useStyles = makeStyles(theme => {
        return ({
            buttonGroup: {
                margin: "auto auto 5px auto",
                color: colors[variant]["buttonGroup"],
                padding: "0 26px 0 26px",
            },
            
            addButton: {
                color: colors[variant]["addButton"],
                ...buttonConstants,
            },

            delButtonIconsToggled: {
                color: colors[variant]["delButtonIconsToggled"], 
                ...buttonConstants,
            },

            delButtonNoIcons: {
                color: colors[variant]["delButtonNoIcons"],
                ...buttonConstants,
            },

            "@media (max-width: 1600px)":{
                delButtonIconsToggled: { fontSize: "12px" },
                delButtonNoIcons: { fontSize: "12px" },
                buttonGroup: { 
                    fontSize: "12px",                     
                    padding: "0 23px 0 23px", 
                },
                addButton: { fontSize: "12px" },
            }, 

            "@media (max-width: 1200px)":{
                delButtonIconsToggled: { fontSize: "10px" },
                delButtonNoIcons: { fontSize: "10px" },
                buttonGroup: { fontSize: "10px" },
                addButton: { fontSize: "10px" },
            }, 
            
            "@media (max-width:725px)": {
                delButtonIconsToggled: {
                    letterSpacing: ".2px", 
                    fontSize: "8px",
                },
                delButtonNoIcons: {
                    letterSpacing: ".2px", 
                    fontSize: "8px",
                },
                buttonGroup: {
                    letterSpacing: ".2px", 
                    fontSize: "8px",
                },
                addButton: {
                    letterSpacing: ".2px", 
                    fontSize: "8px",
                },
            }
        })
    })

    return useStyles(theme)
}