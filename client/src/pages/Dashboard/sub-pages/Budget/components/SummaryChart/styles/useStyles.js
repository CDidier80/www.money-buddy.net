import { makeStyles, } from '@material-ui/core'


const buttons = {
    fontSize: "9px",
    fontWeight: "700",
    fontFamily: "Lato, sans-serif",
    padding: "0 5px 0 5px"
}

const useStyles = makeStyles({
    title: {
        flex: '1 1 100%',
    },
    tableContainer: {
        maxWidth: "890px",
        margin: "auto"
    },
    buttonGroup: {
        height: "30px",
        width: "50%",
        display: "block",
        margin: "10px auto 0 auto",
        textAlign: "center"
    },
    activeButton: {
        ...buttons,
        color: "#22c1c3",

    },
    inactiveButton: {
        ...buttons,
        color: "lightgray",
    },
})

export default useStyles