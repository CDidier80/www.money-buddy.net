import React, { useState, useEffect } from 'react';
import CategoryDeletePopup from "../CategoryPopups/CategoryDeletePopup"
import ExpenseTable from "../ExpenseTable/ExpenseTable"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import {styles} from "./styles/useStyles"
import { 
    Accordion,
    makeStyles
} from '@material-ui/core';
import ButtonsAddDel from './components/ButtonsAddDel';



const CategoryAccordion = (props) => {
    

    {/*  STATE */}

    const [lengthOfExpenses, setExpensesLength] = useState(0)
    const [render,rerenderExpenseCategory] = useState(false)
    const [showCategoryDeletePopup, toggleCategoryDeletePopup ]= useState(false)
    const [showExpenseDeleteIcons, toggleExpenseDeleteIcons] = useState(false)

    console.log(showExpenseDeleteIcons)
    {/* FUNCTIONS */}

    useEffect(() => {
    }, [lengthOfExpenses])


    const useStyles = makeStyles({...styles})
    const classes = useStyles()


    const categoryDeletePopupProps = {
        showCategoryDeletePopup,
        rerenderExpenseCategory,
        toggleCategoryDeletePopup,
        render
    }

    const buttonsAddDelProps = {
        lengthOfExpenses,
        setExpensesLength,
        toggleExpenseDeleteIcons,
        showExpenseDeleteIcons
    }

    const accordionDropdownTabProps = {
        showCategoryDeletePopup, 
        toggleCategoryDeletePopup
    }

    const expenseTableProps = {
        showExpenseDeleteIcons,
        rerenderExpenseCategory,
        render
    }

    return (
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
    )
}

export default CategoryAccordion