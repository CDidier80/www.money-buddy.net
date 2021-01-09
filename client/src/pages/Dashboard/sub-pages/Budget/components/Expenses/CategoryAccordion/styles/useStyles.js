import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    categoryWrapper: {
        width: "100%",
    },
    accordion: {
        marginBottom: "20px",
        width: "100%",

    },
    title: {
        flex: '1 1 100%',
    },
    tableContainer: {
        maxWidth: "890px",
        margin: "auto"
    },
    flexWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    category: {
        color: "#e6a824",
        fontWeight: "500",
        fontFamily: "Lato, sans-serif",
    },
    buttonGroup: {
        // padding: "0"
    },
    button: {
        fontSize: "9px",
        fontWeight: "700",
        fontFamily: "Lato, sans-serif",
        color: "#e6a824",
        padding: "0 5px 0 5px"
    },
    iconButton: {
        marginRight: "11px",
        "&:hover" : {
            backgroundColor: "#ffcece65"
        }
    },
    deleteIcon: {
        color: "red",
    }
})

export default useStyles