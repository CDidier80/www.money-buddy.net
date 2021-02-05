import { 
    TableRow,
    TableCell, 
    makeStyles, 
} from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles({
    row: {
        width: "100%"
    },
    columnHeader: {
        fontWeight: "bold",
        color: "#22c1c3",
        fontSize: "14px",
        padding: "8px",
    },
    emptyCell: {
        maxWidth: "20px",
        minWidth: "20px", 
        padding: "0px"
    }
})


const InflowHeaders = (props) => {

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
                    align="center"
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
