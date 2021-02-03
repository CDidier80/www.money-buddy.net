import React, { memo } from 'react'
import OutflowsAccordion from "../Outflows/OutflowAccordion/OutflowsAccordion"
import InflowsAccordion from "../Inflows/InflowAccordion/InflowsAccordion"
import SummaryAccordion from "../Summary/SummaryAccordion"

const MemoContent = memo((props) => {
    return (
        <>
            <SummaryAccordion 
                {...props}
            />
            <InflowsAccordion 
                {...props}
            />
            <OutflowsAccordion 
                {...props}
            />
        </>
    )
},(prevProps, nextProps) => {
    // returning a true value causes component to skip rerender
    // if the cause of rerender is a change in ticker (caused by collapsing/opening menu),
    // the route should not rerender
    console.log("reached")
    const {pagMemoTicker: prevTick} = prevProps.fromPaginatingContainer
    const {pagMemoTicker: nextTick} = nextProps.fromPaginatingContainer
    return (prevTick !== nextTick)
})

export default MemoContent
