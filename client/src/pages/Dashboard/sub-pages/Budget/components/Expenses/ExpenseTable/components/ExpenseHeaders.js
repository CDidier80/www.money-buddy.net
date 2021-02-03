import React from 'react';
import { 
    TableCell, 
    TableRow,
    makeStyles, 
} from '@material-ui/core';


const useStyles = makeStyles({

    columnHeader: {
        color: "#d29000",
        fontWeight: "bold"
    },
    emptyCell: {
        maxWidth: "36px",
        minWidth: "36px", 
        padding: "0px"
    }
})

const ExpenseHeaders = (props) => {

    const classes = useStyles()


    return (
        // <TableHead>
            <TableRow>
                <TableCell 
                    className={classes.emptyCell}>
                </TableCell>
                <TableCell 
                    className={classes.columnHeader}>
                        Expense
                </TableCell>
                <TableCell 
                    className={classes.columnHeader} 
                    align="right"
                >
                    Monthly Average
                </TableCell>
                <TableCell 
                    className={classes.columnHeader} 
                    align="right"
                >
                    Annual
                </TableCell>
            </TableRow>
    )
}

export default ExpenseHeaders

{/* </TableHead> */}