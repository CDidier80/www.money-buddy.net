import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    row: {
        height: "38px",
        maxHeight: "38px"
    },
    iconCell: {
        maxWidth: "36px",
        padding: "0px"
    },
    iconButton: {
        marginRight: "11px",
        "&:hover" : {
            backgroundColor: "#ffcece65"
        }
    },
    deleteIcon: {
        color: "red",
        fontSize: "13px"
    },
    undoIcon: {
        color: "lightgray",
    }
})