import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { makeStyles, IconButton, } from '@material-ui/core'

const DeleteExpenseIcon = (props) => {


    const {
        newCategories,
        setNewCategories, 
        updateBudget, 
        tick
    } = props.fromBudget

    const { 
        renderExpAccordion,
        rerenderExpenseAccordian,
        categoryIndex,
    } = props.fromExpenseAccordion

    const { expenseIndex, } = props.fromExpenseTable


    const useStyles = makeStyles({
        iconButton: {
            marginRight: "11px",
            "&:hover" : {
                backgroundColor: "#ffcece65"
            }
        },
        deleteIcon: {
            color: "red",
            fontSize: "13px"
        }
    })

    
    const classes = useStyles()

    const handleDeleteExpense = (e) => {
        e.preventDefault()
        try {
            const expenseIndex = e.currentTarget.id
            let categoriesArrayCopy = [...newCategories]
            let expenseItem = categoriesArrayCopy[categoryIndex]['expenses'][expenseIndex]['amount']
            categoriesArrayCopy[categoryIndex]['expenses'].splice(expenseIndex, 1)
            setNewCategories(categoriesArrayCopy)

            // full budget rerender only necessary if expense is not $0
            if (expenseItem === 0) {
                rerenderExpenseAccordian(!renderExpAccordion)
            } else {
                updateBudget(tick + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <IconButton
            className={classes.iconButton}
            onClick={(e) => handleDeleteExpense(e)}
            id={expenseIndex}
        >
            <HighlightOffIcon 
                className={classes.deleteIcon} 
                fontSize="small"
            />
        </IconButton>
    )
}

export default DeleteExpenseIcon
