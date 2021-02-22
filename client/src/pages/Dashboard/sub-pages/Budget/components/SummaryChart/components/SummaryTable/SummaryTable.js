import SummaryRows from "../SummaryRows/SummaryRows"
import TableWrapper from './TableWrapper'
import React from 'react'


const SummaryTable = (props) => {

    return (
        <TableWrapper {...props} >
            <SummaryRows {...props} />
        </TableWrapper>
    )
}

export default SummaryTable

