import React, { useState, useEffect } from 'react';
import CategoryDeletePopup from "../CategoryPopups/CategoryDeletePopup"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpenseTable from "../ExpenseTable/ExpenseTable"
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import useStyles from "./styles/useStyles"
import { 
    Typography, 
    Button,
    ButtonGroup,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionActions,
    IconButton,
} from '@material-ui/core';



const CategoryAccordion = (props) => {
    
    {/*  PROPS */}

    const { 
        category, 
        categoryIndex: cI, 
        showDeleteIcons 
    } = props

    const { 
        newCategories, 
        setNewCategories, 
        toggleChanges,
        userMadeChanges 
    } = props.categoryHooks

    const { name } = category

    {/*  STATE */}

    const [lengthOfExpenses, setExpensesLength] = useState(0)
    const [render, rerenderExpenseCategory] = useState(false)
    const [ showCategoryDeletePopup, toggleCategoryDeletePopup ]= useState(false)
    const [showExpenseDeleteIcons, toggleExpenseDeleteIcons] = useState(false)


    {/* FUNCTIONS */}

    useEffect(() => {
    }, [lengthOfExpenses])


    const classes = useStyles()


    const addExpense = (e) => {
        e.preventDefault() 
        const newLength = lengthOfExpenses + 1
        const defaultExpense = {expense: `expense #${newLength}`, amount:0}
        let categoriesArrCopy = newCategories
        categoriesArrCopy[cI]["expenses"].unshift(defaultExpense)
        setNewCategories(categoriesArrCopy)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        setExpensesLength(newLength)
    }


    const handleDeleteIcon = (e) => {
        e.preventDefault()
        toggleCategoryDeletePopup(!showCategoryDeletePopup)
    }


    const handleExpenseDeleteIcons = (e) => {
        e.preventDefault()
        toggleExpenseDeleteIcons(!showExpenseDeleteIcons)
    }

    
    return (
        <div className={classes.categoryWrapper}>
            {showCategoryDeletePopup && 
                <CategoryDeletePopup 
                    {...props}
                    name={name}
                    rerenderExpenseCategory={rerenderExpenseCategory}
                    render={render}
                    showCategoryDeletePopup={showCategoryDeletePopup}
                    toggleCategoryDeletePopup={toggleCategoryDeletePopup}
                />
            }
            <Accordion className={classes.accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >

                    {showDeleteIcons &&
                        <IconButton
                            className={classes.iconButton}
                            onClick={(e) => handleDeleteIcon(e)}
                        >
                            <HighlightOffIcon 
                                className={classes.deleteIcon} 
                                fontSize="small"
                            />
                        </IconButton>
                    }
                    
                    <div className={classes.flexWrapper}>
                        <Typography 
                            className={classes.category}
                        >
                            {name}
                        </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ButtonGroup className={classes.buttonGroup} 
                        variant="text" 
                        color="primary" 
                        aria-label="text primary button group"
                    >
                        <Button 
                            className={classes.button}
                            onClick={(e) => addExpense(e)}
                        >
                            Add Expense
                        </Button>
                        <Button 
                            className={classes.button}
                            onClick={(e) => handleExpenseDeleteIcons(e)}
                        >
                            Delete Expense
                        </Button>
                    </ButtonGroup>
                </AccordionDetails>
                <AccordionDetails>
                    <ExpenseTable 
                        {...props} 
                        showExpenseDeleteIcons={showExpenseDeleteIcons}
                        rerenderExpenseCategory={rerenderExpenseCategory}
                        render={render}
                    />
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default CategoryAccordion