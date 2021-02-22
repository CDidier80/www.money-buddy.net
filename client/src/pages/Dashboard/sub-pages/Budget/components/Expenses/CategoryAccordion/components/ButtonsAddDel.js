import { 
    Button,
    makeStyles,
    ButtonGroup,
    AccordionDetails,
} from '@material-ui/core'
import React from 'react'



const ButtonsAddDel = (props) => {

    /* --------------- PROPS ---------------*/

    const {
        newCategories, 
        toggleChanges,
        userMadeChanges,
        setNewCategories,
    } = props.fromBudget

    const { 
        categoryIndex: cI, 
    } = props.fromExpenseAccordion

    const {
        lengthOfExpenses,
        setExpensesLength,
        showExpenseDeleteIcons,
        toggleExpenseDeleteIcons,
    } = props.fromCategoryAccordion


    /* --------------- FUNCTIONS ---------------*/



    const useStyles = makeStyles( theme => {

        const { primary, secondaryDark } = theme.palette

        const buttonConstants = {
            ...theme.lato,
            fontSize: "9px",
            fontWeight: "700",
            padding: "0 5px 0 5px",

        }

        return ({
            button: {
                ...buttonConstants,
                color: secondaryDark.main,
            },
            deleteButtonIconsDisplay: {
                ...buttonConstants,
                color: primary.main 
            },
            deleteButtonNoIcons: {
                ...buttonConstants,
                color: secondaryDark.main
            }
        })
    })

    const classes = useStyles(props.theme)

    const { deleteButtonIconsDisplay: dbid, deleteButtonNoIcons: dbni} = classes
    const currentClass = showExpenseDeleteIcons ? dbid : dbni


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
                    className={currentClass}
                    onClick={(e) => handleExpenseDeleteIcons(e)}
                >
                    {showExpenseDeleteIcons ? "Cancel Delete" : "Delete Expense"}
                </Button>
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default ButtonsAddDel
