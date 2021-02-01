import { makeStyles } from '@material-ui/core'

const buttons = {
    fontFamily: "Lato, sans-serif",
    padding: "0 5px 0 5px",
    borderRadius: "0px",
    fontWeight: "700",
    fontSize: "9px",
}

export const useStyles = makeStyles({

    activeButton: {
        color: "#22c1c3",
        ...buttons,
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: "#48e7ef1a"
        }
    },
    inactiveButton: {
        color: "lightgray",
        ...buttons,
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: "#b8c7c71a"
        }
    },
})