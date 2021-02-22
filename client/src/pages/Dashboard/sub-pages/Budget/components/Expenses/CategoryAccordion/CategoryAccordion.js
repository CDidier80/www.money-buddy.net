import React, { useState, useEffect } from 'react';
import CategoryDeletePopup from "../CategoryPopups/CategoryDeletePopup"
import ExpenseTable from "../ExpenseTable/ExpenseTable"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import {styles} from "./styles/useStyles"
import { 
    Accordion,
    AccordionDetails,
    makeStyles
} from '@material-ui/core';
import ButtonsAddDel from './components/ButtonsAddDel';



const CategoryAccordion = (props) => {
    

    /* ------------------------- STATE -------------------------*/

    const [showCategoryDeletePopup, toggleCategoryDeletePopup] = useState(false)
    const [showExpenseDeleteIcons, toggleExpenseDeleteIcons] = useState(false)
    const [lengthOfExpenses, setExpensesLength] = useState(0)
    const [render,rerenderExpenseCategory] = useState(false)

    /* ------------------------- FUNCTIONS -------------------------*/

    useEffect(() => {}, [lengthOfExpenses])

    /* ------------- styles -------------*/

    const useStyles = makeStyles({...styles})
    const classes = useStyles()



    /* --------------------- PROPS FOR CHILDREN --------------------*/

    const categoryDeletePopupProps = {
        toggleCategoryDeletePopup,
        showCategoryDeletePopup,
        rerenderExpenseCategory,
        render
    }

    const buttonsAddDelProps = {
        lengthOfExpenses,
        setExpensesLength,
        showExpenseDeleteIcons,
        toggleExpenseDeleteIcons,
    }

    const accordionDropdownTabProps = {
        toggleCategoryDeletePopup,
        showCategoryDeletePopup, 
    }

    const expenseTableProps = {
        rerenderExpenseCategory,
        showExpenseDeleteIcons,
        render
    }

    return (
        <AccordionDetails  >
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
                    <ExpenseTable 
                        {...props} 
                        fromCategoryAccordion={{...expenseTableProps}}
                    />
                </Accordion>
            </div>
        </AccordionDetails>
    )
}

export default CategoryAccordion