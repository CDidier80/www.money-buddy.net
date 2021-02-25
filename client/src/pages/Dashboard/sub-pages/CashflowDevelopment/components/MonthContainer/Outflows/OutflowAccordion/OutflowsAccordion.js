import FlowcategoryAccordion from "../FlowcategoryAccordion/FlowategoryAccordion"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import CategoryPopup from "../FlowcategoryPopups/FlowcategoryPopup"
import { makeStyles, Accordion, } from '@material-ui/core'
import React, { useState, useEffect } from 'react'


const OutflowsAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */

    const { newFlowcategories } = props.fromMonthContainer

    /* -------------------------- STATE ------------------------- */

    const [showAddFlowcategoryPanel, toggleAddFlowcategoryPanel] = useState(false)
    const [renderOutflowsAccordion, rerenderOutflowsAccordian ] = useState(false)
    const [showDeleteIcons, toggleDeleteIcons] = useState(false)
    const [memoTicker, incrementMemoTicker] = useState(0)
    const [opened, toggleOpened] = useState(false)

    /* ------------------------ useEffect ----------------------- */

    useEffect(() => { }, [renderOutflowsAccordion])

    /* ----------------------- FUNCTIONS ------------------------ */

    const useStyles = makeStyles({
        root: {
            padding: "3px 3px 6px 3px",
            marginTop: "5px",
        }
    })
    
    const classes = useStyles()


    const handleExpansion = (e) => {
        incrementMemoTicker(memoTicker + 1)
        toggleOpened(!opened)
    }


    return (
            <div>
                { showAddFlowcategoryPanel && 
                    <CategoryPopup 
                        toggleAddFlowcategoryPanel={toggleAddFlowcategoryPanel}
                        {...props} 
                    />
                }
                <Accordion 
                    className={classes.root}
                    onChange={(e)=>handleExpansion(e)}
                >
                    <AccordionDropdownTab opened={opened} />
                    {newFlowcategories.map((flowcategory, index) => {
                        const flowcategoryAccordionProps = {
                            rerenderOutflowsAccordian,
                            flowcategoryIndex: index,
                            renderOutflowsAccordion,
                            showDeleteIcons,
                            flowcategory,
                            memoTicker
                        }
                        return (
                            <FlowcategoryAccordion 
                                fromOutflowsAccordion={{...flowcategoryAccordionProps}}
                                key={`${20000 + index}`}
                                {...props} 
                            />
                        )
                    })}
                </Accordion>
            </div>
    )
}

export default OutflowsAccordion


