import React, { useState, useEffect } from 'react';
import CategoryDeletePopup from "../CategoryPopups/CategoryDeletePopup"
import OutflowsTable from "../OutflowsTable/OutflowsTable"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import {styles} from "./styles/useStyles"
import { 
    Accordion,
    AccordionDetails,
    makeStyles
} from '@material-ui/core';
import ButtonsAddDel from './components/ButtonsAddDel';



const CategoryAccordion = (props) => {

    {/*  STATE */}

    const [lengthOfOutflows, setOuflowsLength] = useState(0)
    const [render,rerenderOutflowCategory] = useState(false)
    const [showCategoryDeletePopup, toggleCategoryDeletePopup ]= useState(false)
    const [showOutflowDeleteIcons, toggleOutflowDeleteIcons] = useState(false)

    {/* FUNCTIONS */}

    useEffect(() => {
    }, [lengthOfOutflows])


    const useStyles = makeStyles({...styles})
    const classes = useStyles()


    const categoryDeletePopupProps = {
        showCategoryDeletePopup,
        rerenderOutflowCategory,
        toggleCategoryDeletePopup,
        render
    }

    const buttonsAddDelProps = {
        lengthOfOutflows,
        setOuflowsLength,
        toggleOutflowDeleteIcons,
        showOutflowDeleteIcons
    }

    const accordionDropdownTabProps = {
        showCategoryDeletePopup, 
        toggleCategoryDeletePopup
    }

    const outflowsTableProps = {
        showOutflowDeleteIcons,
        rerenderOutflowCategory,
        render
    }

    return (
        <AccordionDetails>
            <div className={classes.categoryWrapper}>
                {showCategoryDeletePopup && 
                    <CategoryDeletePopup 
                        {...props}
                        fromCategoryAccordion={{...categoryDeletePopupProps}}
                    />
                }
                <Accordion className={classes.accordion}>
                    <AccordionDropdownTab 
                        {...props}
                        fromCategoryAccordion={{...accordionDropdownTabProps}}
                    />
                    <ButtonsAddDel 
                        {...props}
                        fromCategoryAccordion={{...buttonsAddDelProps}}
                    />
                    <OutflowsTable 
                        {...props} 
                        fromCategoryAccordion={{...outflowsTableProps}}
                    />
                </Accordion>
            </div>
        </AccordionDetails>

    )
}

export default CategoryAccordion