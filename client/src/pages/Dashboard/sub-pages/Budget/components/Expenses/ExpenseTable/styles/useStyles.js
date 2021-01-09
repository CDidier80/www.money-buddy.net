import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles({
    table: {
        minWidth: "270px",
    },
    title: {
        flex: '1 1 100%',
    },
    tableContainer: {
        maxWidth: "890px",
        margin: "auto"
    },
    columnHeader: {
        color: "#e6a824",
        fontWeight: "900"
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