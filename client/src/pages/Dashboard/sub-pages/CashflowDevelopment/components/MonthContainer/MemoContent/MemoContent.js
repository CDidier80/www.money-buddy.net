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
},({pagMemoTicker: prevTicker}, {pagMemoTicker: nextTicker}) => prevTicker !== nextTicker)

export default MemoContent
