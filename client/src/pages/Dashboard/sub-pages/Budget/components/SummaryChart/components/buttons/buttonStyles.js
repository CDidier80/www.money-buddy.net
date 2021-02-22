import { makeStyles } from '@material-ui/core'

const buttons = {
    fontFamily: "Lato, sans-serif",
    padding: "0 5px 0 5px",
    borderRadius: "0px",
    fontWeight: "700",
    fontSize: "9px",
}

export const useStyles = makeStyles(({palette: p}) => ({

    activeButton: {
        ...buttons,
        color: p.primary.main,
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: "#48e7ef1a"
        }
    },
    inactiveButton: {
        ...buttons,
        color: "lightgray",
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: p.secondary.transparent["1"]
        }
    },
}))