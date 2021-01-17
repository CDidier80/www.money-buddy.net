import React, { useState, useEffect } from 'react'
import CategoryPopup from "../FlowcategoryPopups/FlowcategoryPopup"
import FlowcategoryAccordion from "../FlowcategoryAccordion/FlowategoryAccordion"
import ButtonsAddDelete from './components/ButtonsAddDelete'
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import { 
    makeStyles,
    Accordion,
} from '@material-ui/core';



const OutflowsAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */

    // console.log(props)

    const { 
        newFlowcategories,
        setNewFlowcategories
    } = props.fromMonthContainer
    

    /* -------------------------- STATE ------------------------- */

    const [showAddFlowcategoryPanel, toggleAddFlowcategoryPanel] = useState(false)
    const [showDeleteIcons, toggleDeleteIcons] = useState(false)
    const [opened, toggleOpened] = useState(false)
    // must keep -- optimizes performance
    const [renderOutflowsAccordion, rerenderOutflowsAccordian ] = useState(false)


    /* ------------------------ useEffect ----------------------- */

    useEffect(() => {
    }, [renderOutflowsAccordion])

    

    /* ----------------------- FUNCTIONS ------------------------ */


    const useStyles = makeStyles({
        accordion: {
            marginTop: "5px"
        }, 
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showDeleteIcons ? "#22c1c3" : "#e6a824",
            padding: "0 5px 0 5px"
        },
    })
    
    const classes = useStyles()
    
    
    const handleExpansion = (e) => {
        toggleOpened(!opened)
        console.log("changed")
    }


    const buttonsAddDeleteProps ={
        toggleDeleteIcons,
        showDeleteIcons,
        toggleAddFlowcategoryPanel
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
                className={classes.accordion}
                onChange={(e)=>handleExpansion(e)}
            >
                <AccordionDropdownTab 
                    opened={opened}
                />
                <ButtonsAddDelete 
                    fromOutflowsAccordion={{...buttonsAddDeleteProps}}
                />
                {newFlowcategories.map((flowcategory, index) => {
                    const flowcategoryAccordionProps = {
                        flowcategory,
                        flowcategoryIndex: index,
                        showDeleteIcons,
                        rerenderOutflowsAccordian,
                        renderOutflowsAccordion
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


