import { useIncomeHeaderStyles } from "../../styles"
import useIncomeStyles from "../../../incomeStyles"
import { TableCell } from '@material-ui/core'
import React from 'react'


const HeaderCell = (props) => {

    const { headerCell } = useIncomeStyles("HeaderCell")
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
