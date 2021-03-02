import { makeStyles } from '@material-ui/core/'


export const useButtonStyles = (theme, props) => {

    const { palette: p, lato } = theme
    const responsiveStyleKey = (
        (props.fromIncomeAccordion.smallerButtons === true && "smaller") || "normal"
    )
    const variant = props.variant || "primary"

    /**
     *       Responsive Style Alternatives
     * ==========================================
     */

    const responsiveStyles = {
        smaller: {
            letterSpacing: ".2px", 
            fontSize: "8px",
        },
        normal: {
            fontSize: '9px'
        },

    }

    // responsive styles are deconstructed into buttonConstants
    const buttonConstants = {
        ...responsiveStyles[responsiveStyleKey],
        padding: "0 5px 0 5px",
        fontWeight: "700",
        ...lato
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
            delButtonIconsToggled:  p.secondary.main,
            addButton:              p.secondary.main,
            buttonGroup:            p.secondary.main,
            delButtonNoIcons:       p.primaryDark.main,
        },
    }

    const useStyles = makeStyles(theme => {
        return ({
            buttonGroup: {
                margin: "auto auto 5px auto",
                color: colors[variant]["buttonGroup"],
                padding: "0 14px 0 14px",
                maxWidth: "890px",
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
        })
    })

    return useStyles(theme)
}