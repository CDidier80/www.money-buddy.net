import { makeStyles } from '@material-ui/core'

const buttons = {
    fontFamily: "Lato, sans-serif",
    padding: "0 1px 0 1px",
    borderRadius: "0px",
    fontWeight: "700",
    fontSize: "8px",
}

export const useStyles = makeStyles({

    activeButton: {
        color: "#2c7b71",
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