import React, { useState } from 'react'
import TableWrapper from "./TableWrapper"
import { TableBody } from '@material-ui/core'
import OutflowRows from "../OutflowRow/OutflowRows"
import OutflowHeaders from "./components/OutflowHeaders"


const OutflowTable = props => {

    return (
        <TableWrapper>
            <TableBody>
                <OutflowHeaders { ...props } />
                <OutflowRows    { ...props } />
            </TableBody>
        </TableWrapper>
    )
}

export default OutflowTable

