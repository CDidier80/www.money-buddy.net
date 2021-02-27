import { 
    TableRow,
    TableCell, 
} from '@material-ui/core'
import React from 'react'
import { useInflowHeadersStyles } from "../../../styles/styles"


const InflowHeaders = ({theme}) => {

    const classes = useInflowHeadersStyles(theme)

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

export default InflowHeaders
