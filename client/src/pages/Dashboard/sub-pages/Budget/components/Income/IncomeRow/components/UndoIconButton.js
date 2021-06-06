import { IconButton, Fade, makeStyles } from '@material-ui/core'
import UndoIcon from '@material-ui/icons/Undo'
import React from 'react';



const useStyles = makeStyles({
    iconButton: {
        marginRight: "11px",
        "&:hover" : {
            backgroundColor: "#ffcece65"
        }
    },
    undoIcon: {
        color: "lightgray",
    }
})


const UndoIconButton = props => {

    const { 
        tick,
        newIncomes,
        updateBudget,
        setNewIncomes,
    } = props.fromBudget

    const {
        source,
        arrayIndex,
    } = props.fromIncomeTable

    const {
        iconShouldShow,
        cellAmountHistory, 
        setCellAmountHistory,
    } = props.fromIncomeRow


    const classes = useStyles()

    const restoreLastValue = (e) => {

        e.preventDefault()
        let newIncomesCopy = newIncomes
        let historyCopy = cellAmountHistory
        const currentAmount = historyCopy.pop()
        const previousAmount = historyCopy[historyCopy.length - 1]
        const previousRow = {
            source: source, 
            amount: previousAmount
        }
        newIncomesCopy[arrayIndex] = previousRow
        setCellAmountHistory(historyCopy)
        setNewIncomes(newIncomesCopy)
        updateBudget(tick + 1)
    }

    return (
        <Fade in={iconShouldShow}>
            <IconButton
                className={classes.iconButton}
                onClick={(e) => restoreLastValue(e)}
                id={arrayIndex}
            >
                <UndoIcon 
                    className={classes.undoIcon} 
                    fontSize="small"
                />
            </IconButton>
        </Fade>
    )
}

export default UndoIconButton
