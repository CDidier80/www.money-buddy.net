import { TableCell } from '@material-ui/core'
import React from 'react'

const SummaryCell = (props) => {
    
    const {
        h5ClassName,
        h5Content,
        align,
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
