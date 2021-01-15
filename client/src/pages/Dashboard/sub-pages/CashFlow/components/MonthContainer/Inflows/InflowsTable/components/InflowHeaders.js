import React from 'react';
import { 
    TableCell, 
    TableRow,
    makeStyles, 
} from '@material-ui/core';


const useStyles = makeStyles({

    columnHeader: {
        color: "#22c1c3",
        fontWeight: "bold"
    },
    emptyCell: {
        maxWidth: "36px",
        minWidth: "36px", 
        padding: "0px"
    }
})


const InflowHeaders = (props) => {

    const classes = useStyles()

    return (
            <TableRow>
                <TableCell 
                    className={classes.emptyCell}>
                </TableCell>
                <TableCell 
                    className={classes.columnHeader}
                >
                    Inflow Source
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
export default InflowHeaders
