import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles( theme => {

    const { primary, secondaryDark } = theme.palette

    const delButtonConstants = {
        fontSize: "9px",
        fontWeight: "700",
        padding: "0 5px 0 5px",
    }
    
    return ({
        button: {
            ...theme.lato,
            fontSize: "9px",
            fontWeight: "700",
            padding: "0 5px 0 5px",
            color: secondaryDark.main,
        },
        deleteButtonIconsDisplay: {
            ...theme.lato,
            color: primary.main,
            ...delButtonConstants,
        },
        deleteButtonNoIcons: {
            ...theme.lato,
            ...delButtonConstants,
            color: secondaryDark.main,
        },
    })
})