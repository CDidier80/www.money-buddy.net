import { useEmptyCellStyles } from "../../styles"
import { TableCell } from '@material-ui/core'
import React from 'react'

const EmptyCell = (props) => {

    const { emptyCell } = useEmptyCellStyles(props.theme)

    return (
        <TableCell 
            className={emptyCell} 
            align="right"
        >
                {props.label || ""}
        </TableCell>
    )
}

export default EmptyCell
