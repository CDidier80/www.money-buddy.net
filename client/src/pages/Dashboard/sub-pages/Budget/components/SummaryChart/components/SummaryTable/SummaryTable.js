import { 
    Paper, 
    Table, 
    TableBody, 
    makeStyles,
    TableContainer, 
} from '@material-ui/core';
import { sizing } from '@material-ui/system';
import React, { useLayoutEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import SummaryRows from "../SummaryRows/SummaryRows"


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

