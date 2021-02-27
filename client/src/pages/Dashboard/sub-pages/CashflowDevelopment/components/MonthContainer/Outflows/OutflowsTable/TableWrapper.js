import { 
    Paper, 
    Table, 
    TableContainer, 
    AccordionDetails,
} from '@material-ui/core'
import React from 'react'
import { useTableWrapperStyles } from "../../styles/styles"

const TableWrapper = ({children, theme}) => {

    const classes = useTableWrapperStyles(theme)

    return (
        <AccordionDetails
            className={classes.tableContainer}
        >
            <TableContainer component={Paper}>
                <Table 
                    className={classes.table} 
                    aria-label="a dense table"
                    size="small" 
                >
                    { children }
                </Table>
            </TableContainer>
        </AccordionDetails>
    )
}

export default TableWrapper
