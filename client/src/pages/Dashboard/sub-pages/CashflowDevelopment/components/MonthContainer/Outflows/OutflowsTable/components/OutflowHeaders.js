import React from 'react';
import { 
    TableCell, 
    TableRow,
    makeStyles, 
} from '@material-ui/core';


const useStyles = makeStyles({
    row: {
        width: "100%"
    },
    columnHeader: {
        color: "#e6a824",
        fontWeight: "900",
        padding: "8px",
        fontSize: "14px"
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
            <TableRow
                className={classes.row}
            >
                <TableCell 
                    className={classes.emptyCell}>
                </TableCell>
                <TableCell 
                    className={classes.columnHeader}
                >
                    Outflow
                </TableCell>
                <TableCell 
                    className={classes.columnHeader} 
                    align="right"
                >
                    Amount
                </TableCell>
            </TableRow>
    )
}

{/* </TableHead> */}
export default OutflowHeaders
