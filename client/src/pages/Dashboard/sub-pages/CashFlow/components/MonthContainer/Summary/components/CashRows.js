import React from 'react'
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


    const useStyles = makeStyles({
        cashTable: {
            marginTop: "14px"
        },
        cell : {
            borderBottom: "none"
        }
    })

    const classes = useStyles()

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
                console.log(description, number)
                return (
                    <TableRow 
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
