import React from 'react'
import { 
    TableCell, 
    TableRow,
    Paper,
    TableContainer,
    TableBody,
    Table,
    makeStyles
} from '@material-ui/core';


const FlowRows = (props) => {

    const {
        monthlyInflow,
        monthlyOutflow,
        netCashflow
    } = props.fromSummaryTable


    const useStyles = makeStyles({
        tableContainter :{
            margin: "auto",
            width: "100%",
            padding: "5px"
        },
        cell : {
            borderBottom: "none"
        },
        outflowCell : {}
    })

    const classes = useStyles()

    const flowRows = [
        {
            description: "Total Inflows",
            number: monthlyInflow,
            className: classes.cell
        },
        {
            description: "Total Outflows",
            number: monthlyOutflow,
            className: classes.outflowCell
        },
        {
            description: "Net Cashflow",
            number: netCashflow,
            className : classes.cell
        },
    ]

    return (
        <Table 
            // className={classes.table} 
            size="small" 
            aria-label="a dense table"
        >
            <TableBody 
                // className={classes.tableBody}
            >
                {flowRows.map((row) => {
                    const {description, number, className} = row
                    console.log(description, number, className)
                    return (
                        <TableRow 
                        >
                            <TableCell
                                className={className}
                            >
                                <h5 className="summary-text">
                                    { description } 
                                </h5>
                            </TableCell>
                            <TableCell 
                                align="right"
                                className={className}
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

export default FlowRows
