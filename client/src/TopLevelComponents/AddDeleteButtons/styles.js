import { moneyBuddyTheme } from "../../modules/themeAndStyles"
import { makeStyles } from '@material-ui/core/'

/**
 * =============================
 *       THEME VARIABLES
 * =============================
 */

const { lato, palette } = moneyBuddyTheme
const { primary: p, secondary: s} = palette

/**
 * =======================================
 *    INDIVIDUAL NBUTTON STYLE FUNCTIONS
 * =======================================
 */

    const buttonConstants = {
        padding: "0 5px 0 5px",
        fontWeight: "700",
        ...lato
    }

    const makeDeleteButtons = (iconColor, noIconColor) => ({
        delButtonIconsToggled: {
            ...buttonConstants,
            color: iconColor, 
        },
        delButtonNoIcons: {
            color: noIconColor,
            ...buttonConstants,
        },
    })

    const makeAddButton = color => ({
        addButton: {
            ...buttonConstants,
            color: color,
        },
    })

    const makeButtonGroup = color => ({
        padding: "0 5px 0 5px",
        maxWidth: "890px",
        margin: "auto",
        color: color,
    })


/**
 * ========================================
 *    PRIMARY / SECONDARY BUTTON STYLES
 * ========================================
 */

export const usePrimaryStyles = makeStyles({
    ...makeDeleteButtons(s.main, p.main,),
    ...makeButtonGroup(p.main),
    ...makeAddButton(p.main)
})


export const useSecondaryStyles = makeStyles({
    ...makeDeleteButtons(s.main, p.main),
    ...makeButtonGroup(s.main),
    ...makeAddButton(s.main)
})