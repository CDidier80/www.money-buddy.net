import OutflowsAccordion from "../Outflows/OutflowAccordion/OutflowsAccordion"
import InflowsAccordion from "../Inflows/InflowAccordion/InflowsAccordion"
import SummaryAccordion from "../Summary/SummaryAccordion"
import React, { memo } from 'react'

const MemoContent = memo((props) => {
    return (
        <>
            <SummaryAccordion  {...props} />
            <InflowsAccordion  {...props} />
            <OutflowsAccordion {...props} />
        </>
    )
},({fromPaginatingContainer: prev}, {fromPaginatingContainer: next}) => {
    return (prev.pagMemoTicker !== next.pagMemoTicker)
})

export default MemoContent
