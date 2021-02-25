import { 
    makeStyles, 
    TableCell, 
    TableRow,
} from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles({
    row: { width: "100%" },
    columnHeader: {
        fontWeight: "700",
        color: "#e6a824",
        fontSize: "14px",
        padding: "8px",
    },
    emptyCell: {
        maxWidth: "20px",
        minWidth: "20px", 
        padding: "0px"
    }
})

const OutflowHeaders = (props) => {

    const classes = useStyles()

    return (
            <TableRow className={classes.row} >
                <TableCell className={classes.emptyCell}> </TableCell>
                <TableCell className={classes.columnHeader} > Outflow </TableCell>
                <TableCell className={classes.columnHeader} align="right" > Amount </TableCell>
            </TableRow>
    )
}

export default OutflowHeaders
