import { 
    Accordion,
    AccordionDetails,
} from '@material-ui/core'
import React, { useState, useEffect, memo } from 'react'
import OutflowsTable from "../OutflowsTable/OutflowsTable"
import { useFlowcategoryAccordionStyles } from "../../styles/styles"
import FlowcategoryDropdown from "./components/FlowcategoryDropdown"


const FlowcategoryAccordion = memo(props => {

    const { memoTicker } = props.fromOutflowsAccordion

    /* -------------------------- STATE ------------------------- */

    const [lengthOfOutflows, setOuflowsLength] = useState(0)
    const [render,rerenderOutflowCategory] = useState(false)
    const [showOutflowDeleteIcons, toggleOutflowDeleteIcons] = useState(false)
    const [showFlowcategoryDeletePopup, toggleFlowcategoryDeletePopup ]= useState(false)

    /* ------------------------ FUNCTIONS ----------------------- */

    useEffect(() => { }, [lengthOfOutflows])
    
    const classes = useFlowcategoryAccordionStyles(props.theme)


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
    }

    const outflowsTableProps = {
        rerenderOutflowCategory,
        showOutflowDeleteIcons,
        render
    }

    return ( memoTicker == 0 ? <div></div> :
        <AccordionDetails 
            className={classes.accordionDetails}
        >
            <div className={classes.categoryWrapper}>
                <Accordion className={classes.accordion}>
                    <FlowcategoryDropdown 
                        { ...props }
                        fromFlowcategoryAccordion={{...accordionDropdownTabProps}}
                    />
                    <OutflowsTable 
                        { ...props } 
                        fromFlowcategoryAccordion={{...outflowsTableProps}}
                    />
                </Accordion>
            </div>
        </AccordionDetails>
    )
}, ({ fromOutflowsAccordion: prev }, { fromOutflowsAccordion: next }) => {
    if (next.memoTicker === 1) return false
    return (prev.memoTicker !== next.memoTicker) 
})

export default FlowcategoryAccordion