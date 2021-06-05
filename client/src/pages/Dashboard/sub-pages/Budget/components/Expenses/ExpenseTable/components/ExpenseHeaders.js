import React from 'react';
import { 
    TableCell, 
    TableRow,
    makeStyles, 
} from '@material-ui/core';


const useStyles = makeStyles( ({palette: p}) => {

    return ({
        columnHeader: {
            color: p.secondaryDark.main,
            fontWeight: "bold"
        },
        emptyCell: {
            maxWidth: "36px",
            minWidth: "36px", 
            padding: "0px"
        }
        })
    }
)


const ExpenseHeaders = (props) => {

    const { emptyCell, columnHeader } = useStyles()

    return (
            <TableRow>
                <TableCell 
                    className={ emptyCell }>
                </TableCell>
                <TableCell 
                    className={ columnHeader }
                >
                    Expense
                </TableCell>
                <TableCell 
                    className={ columnHeader } 
                    align="right"
                >
                    Monthly Average
                </TableCell>
                <TableCell 
                    className={ columnHeader } 
                    align="right"
                >
                    Annual
                </TableCell>
            </TableRow>
    )
}

export default ExpenseHeaders
