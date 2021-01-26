import React from 'react'
import { TableCell } from '@material-ui/core'

const SummaryCell = (props) => {
    
    const {
        align,
        h5ClassName,
        h5Content
    } = props

    return (
        <TableCell align={align}>
            <h5 className={h5ClassName} >
                {h5Content}
            </h5>
        </TableCell>
    )
}

export default SummaryCell
