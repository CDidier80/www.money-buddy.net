import { makeStyles } from '@material-ui/core'

const buttons = {
    fontSize: "9px",
    fontWeight: "700",
    fontFamily: "Lato, sans-serif",
    padding: "0 5px 0 5px"
}

export const useStyles = makeStyles({

    activeButton: {
        ...buttons,
        color: "#22c1c3",

    },
    inactiveButton: {
        ...buttons,
        color: "lightgray",
    },
})