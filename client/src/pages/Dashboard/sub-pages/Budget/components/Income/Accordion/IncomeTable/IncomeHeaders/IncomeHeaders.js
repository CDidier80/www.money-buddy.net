import React from 'react';

import { 
    TableCell, 
    TableRow,
    makeStyles, 
    TableHead
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


const IncomeHeaders = (props) => {

    const {fourColumns} = props.fromIncomeAccordion
    const classes = useStyles()

    return (
        // <TableHead>
            <TableRow>
                <TableCell 
                    className={classes.emptyCell}>
                </TableCell>
                <TableCell 
                    className={classes.columnHeader}
                >
                    Income Source
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

{/* </TableHead> */}
export default IncomeHeaders
