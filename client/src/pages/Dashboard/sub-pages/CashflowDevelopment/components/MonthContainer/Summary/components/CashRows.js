import { Table, TableRow, TableCell, TableBody, } from '@material-ui/core/'
import { makeCashRowStyles } from "../../styles/styles"
import React from 'react'


const CashRows = (props) => {

    const {
        endingCash,
        startingCash,
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

    const whiteText = { style: {color: 'white'}}

    
    return (
        <Table 
            size="small" 
            aria-label="a dense table"
            className={classes.cashTable}
        >
            <TableBody >
                {cashRows.map((row) => {
                    const {description, number} = row
                    return (
                        <TableRow 
                            key={`${number}${description}`}
                            className={classes.cashRows}
                        >
                            <TableCell className={classes.cell} {...whiteText}>
                                <h5 className="summary-text" {...whiteText}>
                                    { description } 
                                </h5>
                            </TableCell>
                            <TableCell
                                className={classes.cell}
                                align="right"
                                {...whiteText}
                            >
                                <h5 {...whiteText}> { number } </h5>
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default CashRows
