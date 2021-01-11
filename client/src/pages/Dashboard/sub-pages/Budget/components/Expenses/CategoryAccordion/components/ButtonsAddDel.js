import React from 'react'
import { 
    Button,
    ButtonGroup,
    AccordionDetails,
    makeStyles
} from '@material-ui/core'



const ButtonsAddDel = (props) => {

    {/*  PROPS */}

    const {
        toggleChanges,
        userMadeChanges,
        setNewCategories,
        newCategories, 
    } = props.fromBudget

    const { 
        categoryIndex: cI, 
    } = props.fromExpenseAccordion

    const {
        lengthOfExpenses,
        setExpensesLength,
        toggleExpenseDeleteIcons,
        showExpenseDeleteIcons
    } = props.fromCategoryAccordion


    {/* FUNCTIONS */}

    const useStyles = makeStyles({
        button: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: "#e6a824",
            padding: "0 5px 0 5px"
        },
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showExpenseDeleteIcons ? "#22c1c3" : "#e6a824",
            padding: "0 5px 0 5px"
        },
    })


    const classes = useStyles()


    const addExpense = (e) => {
        e.preventDefault() 
        const newLength = lengthOfExpenses + 1
        const defaultExpense = {expense: `expense #${newLength}`, amount:0}
        let categoriesArrCopy = [...newCategories]
        categoriesArrCopy[cI]["expenses"].unshift(defaultExpense)
        setNewCategories(categoriesArrCopy)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        setExpensesLength(newLength)
    }


    const handleExpenseDeleteIcons = (e) => {
        e.preventDefault()
        toggleExpenseDeleteIcons(!showExpenseDeleteIcons)
    }


    return (
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
                    className={classes.deleteButton}
                    onClick={(e) => handleExpenseDeleteIcons(e)}
                >
                    {showExpenseDeleteIcons ? "Cancel Delete" : "Delete Expense"}
                </Button>
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default ButtonsAddDel
