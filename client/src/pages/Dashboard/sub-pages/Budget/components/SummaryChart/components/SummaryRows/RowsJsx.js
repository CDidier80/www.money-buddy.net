import SummaryCellPair from "./SummaryCellPair"
import { TableRow } from '@material-ui/core'
import React from 'react'

const RowsJsx = ({data}) => (
    <>
        {data.map((cellPairProps, index) => (
            <TableRow key={`${index}SummaryCells`}>
                <SummaryCellPair 
                    {...cellPairProps}
                />
            </TableRow>
        ))}
    </>
)


export default RowsJsx