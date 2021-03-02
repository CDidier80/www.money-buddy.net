import { useIncomeHeaderStyles } from "../../../styles/useIncomeStyles"
import { TableCell } from '@material-ui/core'
import React from 'react'


const HeaderCell = (props) => {

    const { headerCell } = useIncomeHeaderStyles()
    const styleOverrides = props.overrides || {}

    return (
        <TableCell 
            style={styleOverrides}
            className={headerCell} 
            align="right"
        >
                {props.label || "NO LABEL"}
        </TableCell>
    )
}

export default HeaderCell
