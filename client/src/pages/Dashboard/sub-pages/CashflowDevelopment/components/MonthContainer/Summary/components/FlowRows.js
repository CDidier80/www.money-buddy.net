import React from 'react'
import { makeFlowRowsStyles } from "../../styles/styles"
import { 
    TableCell, 
    TableRow,
    TableBody,
    Table,
} from '@material-ui/core';


const FlowRows = props => {

    const {
        netCashflow,
        monthlyInflow,
        monthlyOutflow,
    } = props.fromSummaryTable


    const classes = makeFlowRowsStyles(props.theme)

    const flowRows = [
        {
            number: monthlyInflow,
            description: "Total Inflows",
            className: classes.inflowCell
        },
        {
            number: monthlyOutflow,
            description: "Total Outflows",
            className: classes.outflowCell
        },
        {
            number: netCashflow,
            description: "Net Cashflow",
            className : classes.netCashflowCell
        },
    ]

    const whiteText = { style: {color: 'white'}}

    return (
        <Table 
            // className={classes.table} 
            size="small" 
            aria-label="a dense table"
        >
            <TableBody 
                className={classes.tableBody}
            >
                {flowRows.map((row) => {
                    const {description, number, className} = row
                    return (
                        <TableRow 
                            key={`${description}${number}`}
                        >
                            <TableCell
                                className={className}
                                {...whiteText}
                            >
                                <h5 className="summary-text" {...whiteText}>
                                    { description } 
                                </h5>
                            </TableCell>
                            <TableCell 
                                align="right"
                                className={className}
                            >
                                <h5 {...whiteText}>
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

export default FlowRows
