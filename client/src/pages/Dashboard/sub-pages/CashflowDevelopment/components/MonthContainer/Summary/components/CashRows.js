import React from 'react'
import { makeCashRowStyles } from "../../styles/styles"
import { 
    TableCell, 
    TableRow,
    makeStyles,
    Table,
    TableBody
} from '@material-ui/core/';


const CashRows = (props) => {

    const {
        startingCash,
        endingCash
    } = props.fromSummaryTable

    const classes = makeCashRowStyles(props.theme)

    const cashRows = [
        {
            description: "Starting Cash",
            number: startingCash,
        },
        {
            description: "Ending Cash",
            number: endingCash,
        },
    ]
    
    return (
        <Table 
            // className={classes.table} 
            size="small" 
            aria-label="a dense table"
            className={classes.cashTable}
        >
            <TableBody 
                
            >
            {cashRows.map((row) => {
                const {description, number} = row
                // console.log(description, number)
                return (
                    <TableRow 
                        key={`${number}${description}`}
                        className={classes.cashRows}
                    >
                        <TableCell
                            className={classes.cell}
                        >
                            <h5 className="summary-text">
                                { description } 
                            </h5>
                        </TableCell>
                        <TableCell
                            className={classes.cell}
                            align="right"
                        >
                            <h5>
                                { number }
                            </h5>
                        </TableCell>
                    </TableRow>
                )
            })}
            </TableBody>
        </Table>
    )
}

export default CashRows
