import { makeStyles } from '@material-ui/core/'

export const makeHeaderStyles = makeStyles(theme => {

    const headerStyles = {
        flexWrapper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        },
        headerWrapper: {
            backgroundColor: "white",
            display: "inline-block",
            marginBottom: "5px",
            borderRadius: "5px",
            padding: "7px",
        },
        header: {
            color: theme.palette.primaryDark.main
        }
    }
    return headerStyles
})