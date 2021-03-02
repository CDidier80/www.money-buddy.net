import { 
    Paper, 
    Table, 
    TableBody, 
    makeStyles,
    TableContainer, 
} from '@material-ui/core'
import React from 'react'

export const TableWrapper = (props) => {

    const useStyles = makeStyles({
        tableContainer: {
            maxWidth: "425px",
            overflow: "hidden",
            flexGrow: "2",
        },
        table: {
            minHeight: "100%",
            flexGrow: "1",
        }
    })

    const classes = useStyles()

    return (
        <TableContainer 
            className={classes.tableContainer}
            component={Paper}
        >
            <Table 
                aria-label="a dense table"
                className={classes.table}
            >
                <TableBody>
                    {props.children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableWrapper