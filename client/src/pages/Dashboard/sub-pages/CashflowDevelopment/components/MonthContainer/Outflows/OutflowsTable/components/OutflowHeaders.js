import { makeStyles, TableCell, TableRow, } from '@material-ui/core'
import { useOutflowHeadersStyles } from "../../../styles/styles"
import React from 'react'


const OutflowHeaders = ({theme}) => {

    const { columnHeader, emptyCell, row } = useOutflowHeadersStyles(theme)

    const headers = { className: columnHeader }

    return (
            <TableRow className={row} >
                <TableCell className={emptyCell}> </TableCell>
                <TableCell {...headers} > Outflow </TableCell>
                <TableCell {...headers} align="right" > Amount </TableCell>
            </TableRow>
    )
}

export default OutflowHeaders
