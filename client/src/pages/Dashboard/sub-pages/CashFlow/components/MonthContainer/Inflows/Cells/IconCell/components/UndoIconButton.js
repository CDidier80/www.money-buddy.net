import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'



const UndoIconButton = (props) => {

    // const {
    //     newCategories,
    //     setNewCategories, 
    //     toggleChanges,
    //     userMadeChanges,
    //     updateBudget, 
    //     tick
    // } = props.fromBudget

    // const {
    //     cellAmountHistory,
    //     setCellAmountHistory,
    //     showUndoIcon,
    //     setShowUndoIcon,
    //     iconShouldShow,
    //     setIconShouldShow
    // } = props.fromExpenseRow

    // const {
    //     arrayIndex
    // } = props.fromExpenseAccordion


    const useStyles = makeStyles({
        undoIcon: {
            color: "lightgray",
        },
        iconButton: {
            marginRight: "11px",
            "&:hover" : {
                backgroundColor: "#ffcece65"
            }
        },
    })

    const classes = useStyles()

    const restoreLastValue = (e) => {
        // e.preventDefault()
        // let newIncomesCopy = newIncomes
        // let historyCopy = cellAmountHistory

        // // console.log("history copy:",  historyCopy)

        // const currentAmount = historyCopy.pop()
        // const previousAmount = historyCopy[historyCopy.length - 1]

        // // console.log("currentAmount:",  currentAmount)
        // // console.log("history after pop:",  historyCopy)

        // const previousRow = {
        //     source: source, 
        //     amount: previousAmount
        // }

        // newIncomesCopy[arrayIndex] = previousRow
        // setCellAmountHistory(historyCopy)

        // setNewIncomes(newIncomesCopy)
        // updateBudget(tick + 1)
    }

    return (
        <IconButton
            className={classes.iconButton}
            onClick={(e) => restoreLastValue(e)}
        >
            <UndoIcon 
                className={classes.undoIcon} 
                fontSize="small"
            />
        </IconButton>
    )
}

export default UndoIconButton
