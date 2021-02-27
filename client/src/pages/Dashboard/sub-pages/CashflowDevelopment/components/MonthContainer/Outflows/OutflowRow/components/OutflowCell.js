import { useOutflowRowStyles } from "../../../styles/styles"
import { TableCell } from '@material-ui/core'
import React from 'react'

const OutflowCell = ({theme, rowColor, children}) => {

    const { cell } = useOutflowRowStyles(theme, rowColor)

    return (
        <TableCell 
            className={cell}
            align="right"
        >
            {children}
        </TableCell>
    )
}

export default OutflowCell
