import React, { useState, useEffect } from 'react';
import IncomeNumberCell from "./Cells/IncomeNumberCell"
import IncomeSourceCell from "./Cells/IncomeSourceCell"
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import UndoIcon from '@material-ui/icons/Undo';
import { 
    makeStyles, 
    IconButton,
    TableCell, 
    TableRow,
} from '@material-ui/core';


const useStyles = makeStyles({
    iconButton: {
        marginRight: "11px",
        "&:hover" : {
            backgroundColor: "#ffcece65"
        }
    },
    deleteIcon: {
        color: "red",
    }
})


const IncomeRow = (props) => {

    {/*  PROPS */}
    
    const { 
        source,
        amount,
        arrayIndex
    } = props

    const {
        showIncomeDeleteIcons, 
    } = props.fromIncomeAccordion
    
    const { 
        newIncomes,
        setNewIncomes,
        toggleChanges,
        userMadeChanges,
        updateBudget,
        budgetTicker,
        tick
    } = props.fromBudget


    const monthly = Math.round(amount / 12)
    

    {/*  STATE  */}
    
    const [ cellHistory, setCellHistory ] = useState([])
    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)


    {/*  useEffect */}

    useEffect(() => {
        const newHistoryStack = checkHistoryStack(cellHistory, amount)
        setCellHistory(newHistoryStack)
        if(newHistoryStack.length > 1){
            setShowUndoIcon(true)
        }
        // console.log("cellHistory:", cellHistory)
        console.log("row info:", cellHistory, amount)
    }, [amount])


    useEffect(() => {
        const anIconWasActivated = (showIncomeDeleteIcons | showUndoIcon) == true 
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
        // console.log("showIncomeDeleteIcons", showIncomeDeleteIcons)
        // console.log("showUndoIcon", showUndoIcon)
        // console.log("iconShouldShow", iconShouldShow)
    }, [showIncomeDeleteIcons, showUndoIcon])



    {/*  FUNCTIONS */}

    const classes = useStyles()


    const handleDeleteIncome = (e) => {
        e.preventDefault()
        try {
            const incomeIndex = e.currentTarget.id
            let newIncomesCopy = newIncomes
            newIncomesCopy.splice(incomeIndex, 1)
            setNewIncomes(newIncomesCopy)
            if (!userMadeChanges) {
                toggleChanges(true)
            }
            updateBudget(tick + 1)

        } catch (error) {
            console.log(error)
        }
    }


    const checkHistoryStack = (cellHistory, amount) => {
        const cellHasHistory = (cellHistory.length > 0)
        if (cellHasHistory) {
            const lastValue = cellHistory[cellHistory.length-1]
            const cellWasChanged = (amount != lastValue)
            if (cellWasChanged) {
                return [...cellHistory, amount]
            }
        } else {
            return [amount]
        }
        
    }


    const restoreLastValue = (e) => {
        e.preventDefault()
        let historyCopy = cellHistory
        const previousValue = historyCopy.pop()
        setCellHistory(historyCopy)
        setNewIncomes(previousValue)
        updateBudget(tick + 1)
    }


    return (
        <TableRow >

            {iconShouldShow && (
                    <TableCell>
                        {showIncomeDeleteIcons ? 
                            <IconButton
                                className={classes.iconButton}
                                onClick={(e) => handleDeleteIncome(e)}
                                id={arrayIndex}
                            >
                                <HighlightOffIcon 
                                    className={classes.deleteIcon} 
                                    fontSize="small"
                                />
                            </IconButton>

                            :

                            <IconButton
                                className={classes.iconButton}
                                onClick={(e) => restoreLastValue(e)}
                                id={arrayIndex}
                            >
                                <UndoIcon 
                                    className={classes.deleteIcon} 
                                    fontSize="small"
                                />
                            </IconButton>
                        }
                    </TableCell>
                )
            }



            <IncomeSourceCell 
                {...props}
                defaultValue={source} 
            />
            <IncomeNumberCell 
                {...props}
                align="right"
                defaultValue={monthly} 
                isAnnual={false}
            />
            <IncomeNumberCell 
                {...props}
                align="right"
                defaultValue={amount} 
                isAnnual={true}
            />
        </TableRow>
    )
}

export default IncomeRow

