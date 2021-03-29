import React, { useState, useEffect, memo } from 'react'
import OutflowsTable from "../OutflowsTable/OutflowsTable"
import FlowcategoryWrapper from "./components/FlowcategoryWrapper"
import FlowcategoryDropdown from "./components/FlowcategoryDropdown"

const FlowcategoryAccordion = memo((props) => {

    const { memoTicker, theme } = props

    /* -------------------------- STATE ------------------------- */

    const [lengthOfOutflows, setOuflowsLength] = useState(0)
    const [render,rerenderOutflowCategory] = useState(false)
    const [showOutflowDeleteIcons, toggleOutflowDeleteIcons] = useState(false)
    const [showFlowcategoryDeletePopup, toggleFlowcategoryDeletePopup ]= useState(false)

    /* ------------------------ FUNCTIONS ----------------------- */

    useEffect(() => { }, [lengthOfOutflows])
    


    // const categoryDeletePopupProps = {
    //     toggleFlowcategoryDeletePopup,
    //     showFlowcategoryDeletePopup,
    //     rerenderOutflowCategory,
    //     render
    // }

    // const buttonsAddDelProps = {
    //     toggleOutflowDeleteIcons,
    //     showOutflowDeleteIcons,
    //     lengthOfOutflows,
    //     setOuflowsLength,
    // }

    const accordionDropdownTabProps = {
        toggleFlowcategoryDeletePopup,
        showFlowcategoryDeletePopup, 
        ...props
    }

    const outflowsTableProps = {
        rerenderOutflowCategory,
        showOutflowDeleteIcons,
        ...props,
        render,
    }

    return ( memoTicker == 0 ? <div></div> :
        <FlowcategoryWrapper theme={theme} >
            <FlowcategoryDropdown {...accordionDropdownTabProps} />
            <OutflowsTable {...outflowsTableProps} />
        </FlowcategoryWrapper>
    )
    
}, ({memoTicker: prevTicker}, {memoTicker: nextTicker}) => {
    if (nextTicker == 1){
        return false
    } else {
        return prevTicker !== nextTicker
    }
})

export default FlowcategoryAccordion