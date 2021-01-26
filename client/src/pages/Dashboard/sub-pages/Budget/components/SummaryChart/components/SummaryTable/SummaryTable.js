import React from 'react'
import SummaryRows from "../SummaryRows/SummaryRows"
import { sizing } from '@material-ui/system';
import { 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    makeStyles
} from '@material-ui/core';

const SummaryTable = (props) => {

    const useStyles = makeStyles({
        tableContainer: {
            flexGrow: "2",
            overflow: "hidden"
        },
        table: {
            flexGrow: "1",
            minHeight: "100%"
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
                    <SummaryRows {...props} />
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SummaryTable

