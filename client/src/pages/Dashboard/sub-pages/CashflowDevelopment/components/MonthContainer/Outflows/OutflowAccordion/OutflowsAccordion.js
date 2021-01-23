import React, { useState, useEffect } from 'react'
import { 
    makeStyles,
    Accordion,
} from '@material-ui/core'
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import CategoryPopup from "../FlowcategoryPopups/FlowcategoryPopup"
import FlowcategoryAccordion from "../FlowcategoryAccordion/FlowategoryAccordion"


const OutflowsAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */

    const { 
        newFlowcategories,
    } = props.fromMonthContainer
    

    /* -------------------------- STATE ------------------------- */

    const [showAddFlowcategoryPanel, toggleAddFlowcategoryPanel] = useState(false)
    const [showDeleteIcons, toggleDeleteIcons] = useState(false)
    const [opened, toggleOpened] = useState(false)
    const [memoTicker, incrementMemoTicker] = useState(0)
    // must keep -- optimizes performance
    const [renderOutflowsAccordion, rerenderOutflowsAccordian ] = useState(false)


    /* ------------------------ useEffect ----------------------- */

    useEffect(() => {
    }, [renderOutflowsAccordion])


    /* ----------------------- FUNCTIONS ------------------------ */
// .MuiAccordion-root.Mui-expanded:last-child

    const useStyles = makeStyles({
        root: {
            marginTop: "5px",
            padding: "3px 3px 6px 3px",
        }
    })
    
    const classes = useStyles()


    const handleExpansion = (e) => {
        toggleOpened(!opened)
        incrementMemoTicker(memoTicker + 1)
        console.log("changed")
    }


    return (
            <div>
                { showAddFlowcategoryPanel && 
                    <CategoryPopup 
                        {...props} 
                        toggleAddFlowcategoryPanel={toggleAddFlowcategoryPanel}
                    />
                }
                <Accordion 
                    className={classes.root}
                    onChange={(e)=>handleExpansion(e)}
                >
                    <AccordionDropdownTab 
                        opened={opened}
                    />
                    {/* <ButtonsAddDelete 
                        fromOutflowsAccordion={{...buttonsAddDeleteProps}}
                    /> */}
                    {newFlowcategories.map((flowcategory, index) => {
                        const flowcategoryAccordionProps = {
                            flowcategory,
                            flowcategoryIndex: index,
                            showDeleteIcons,
                            rerenderOutflowsAccordian,
                            renderOutflowsAccordion,
                            memoTicker
                        }
                        return (
                            <FlowcategoryAccordion 
                                key={`${20000 + index}`}
                                {...props} 
                                fromOutflowsAccordion={{...flowcategoryAccordionProps}}
                            />
                        )
                    })}
                </Accordion>
            </div>
    )
}

export default OutflowsAccordion


