import FlowcategoryAccordion from "../FlowcategoryAccordion/FlowategoryAccordion"
import OutflowsDropdown from "./components/OutflowsDropdown"
import { useOutflowsAccordionStyles } from "../../styles/styles"
import React, { useState, useEffect } from 'react'
import {  Accordion } from '@material-ui/core'


const OutflowsAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */

    const { newFlowcategories } = props

    /* -------------------------- STATE ------------------------- */

    const [showAddFlowcategoryPanel, toggleAddFlowcategoryPanel] = useState(false)
    const [renderOutflowsAccordion, rerenderOutflowsAccordian ] = useState(false)
    const [showDeleteIcons, toggleDeleteIcons] = useState(false)
    const [memoTicker, incrementMemoTicker] = useState(0)
    const [opened, toggleOpened] = useState(false)

    /* ------------------------ useEffect ----------------------- */

    useEffect(() => { }, [renderOutflowsAccordion])

    /* ----------------------- FUNCTIONS ------------------------ */

    
    const { root } = useOutflowsAccordionStyles(props.theme)


    const handleExpansion = (e) => {
        incrementMemoTicker(memoTicker + 1)
        toggleOpened(!opened)
    }


    return (
            <div>
                <Accordion 
                    className={root}
                    onChange={(e)=>handleExpansion(e)}
                >
                    <OutflowsDropdown opened={opened} />
                        { newFlowcategories.map((flowcategory, index) => {
                            const flowcategoryAccordionProps = {
                                rerenderOutflowsAccordian,
                                flowcategoryIndex: index,
                                renderOutflowsAccordion,
                                key: `${20000 + index}`,
                                showDeleteIcons,
                                flowcategory,
                                memoTicker,
                                ...props,
                            }
                        return (
                            <FlowcategoryAccordion {...flowcategoryAccordionProps} />
                        )
                    })}
                </Accordion>
            </div>
    )
}

export default OutflowsAccordion


