import React, { useState, useEffect } from 'react';
import CategoryDeletePopup from "../FlowcategoryPopups/FlowcategoryDeletePopup"
import OutflowsTable from "../OutflowsTable/OutflowsTable"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import {styles} from "./styles/useStyles"
import { 
    Accordion,
    AccordionDetails,
    makeStyles
} from '@material-ui/core';
import ButtonsAddDel from './components/ButtonsAddDel';



const FlowcategoryAccordion = (props) => {

    {/*  STATE */}

    const [lengthOfOutflows, setOuflowsLength] = useState(0)
    const [render,rerenderOutflowCategory] = useState(false)
    const [showFlowcategoryDeletePopup, toggleFlowcategoryDeletePopup ]= useState(false)
    const [showOutflowDeleteIcons, toggleOutflowDeleteIcons] = useState(false)

    {/* FUNCTIONS */}

    useEffect(() => {
    }, [lengthOfOutflows])


    const useStyles = makeStyles({...styles})
    const classes = useStyles()


    const categoryDeletePopupProps = {
        showFlowcategoryDeletePopup,
        rerenderOutflowCategory,
        toggleFlowcategoryDeletePopup,
        render
    }

    const buttonsAddDelProps = {
        lengthOfOutflows,
        setOuflowsLength,
        toggleOutflowDeleteIcons,
        showOutflowDeleteIcons
    }

    const accordionDropdownTabProps = {
        showFlowcategoryDeletePopup, 
        toggleFlowcategoryDeletePopup
    }

    const outflowsTableProps = {
        showOutflowDeleteIcons,
        rerenderOutflowCategory,
        render
    }

    return (
        <AccordionDetails>
            <div className={classes.categoryWrapper}>
                {showFlowcategoryDeletePopup && 
                    <CategoryDeletePopup 
                        {...props}
                        fromFlowcategoryAccordion={{...categoryDeletePopupProps}}
                    />
                }
                <Accordion className={classes.accordion}>
                    <AccordionDropdownTab 
                        {...props}
                        fromFlowcategoryAccordion={{...accordionDropdownTabProps}}
                    />
                    <ButtonsAddDel 
                        {...props}
                        fromFlowcategoryAccordion={{...buttonsAddDelProps}}
                    />
                    <OutflowsTable 
                        {...props} 
                        fromFlowcategoryAccordion={{...outflowsTableProps}}
                    />
                </Accordion>
            </div>
        </AccordionDetails>

    )
}

export default FlowcategoryAccordion