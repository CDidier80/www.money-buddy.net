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
})


const IncomeHeaders = (props) => {

    const classes = useStyles()

    return (
        <TableHead>
            <TableRow>
                {props.showIncomeDeleteIcons &&
                    <TableCell></TableCell>
                }
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
        </TableHead>
    )
}

export default IncomeHeaders
