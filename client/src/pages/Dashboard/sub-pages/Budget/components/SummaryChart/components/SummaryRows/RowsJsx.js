import SummaryCellPair from "./SummaryCellPair"
import { TableRow } from '@material-ui/core'
import React from 'react'

const RowsJsx = props => {
    const { data, rowColors } = props
    return(
        <>
            {data.map((cellPairProps, index) => (
                <TableRow 
                    key={`${index}SummaryCells`}
                    className={rowColors[index]}
                >
                    <SummaryCellPair 
                        {...cellPairProps}
                    />
                </TableRow>
            ))}
        </>
)}


export default RowsJsx