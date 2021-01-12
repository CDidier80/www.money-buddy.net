import React, { useState, useEffect } from 'react';
import IncomeNumberCell from "./Cells/IncomeNumberCell"
import IncomeSourceCell from "./Cells/IncomeSourceCell"
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import UndoIcon from '@material-ui/icons/Undo';
import { unconditionalStyles } from "./styles/useStyles"
import { 
    IconButton,
    TableCell, 
    TableRow,
    Fade,
    makeStyles
} from '@material-ui/core'


const IncomeRow = (props) => {

    {/*  PROPS */}
    
    const {
        showIncomeDeleteIcons, 
        setFourColumns,
    } = props.fromIncomeAccordion
    
    const { 
        newIncomes,
        setNewIncomes,
        toggleChanges,
        userMadeChanges,
        updateBudget,
        tick
    } = props.fromBudget

    const {
        source,
        amount,
        arrayIndex,
        incomingDeletion,
        setIncomingDeletion,
        rowColor
    } = props.fromIncomeTable


    const monthly = Math.round(amount / 12)
    

    {/*  STATE  */}
    
    const [ cellAmountHistory, setCellAmountHistory ] = useState([])
    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)


    {/*  useEffect */}

    useEffect(() => {
        if(incomingDeletion){
            setCellAmountHistory([amount])
            if (arrayIndex === newIncomes.length-1){
                console.log("last elem")
                setIncomingDeletion(false)
            }
            return
        }
        const lengthOfStack = cellAmountHistory.length
        const lastHistoryIndex = lengthOfStack - 1
        const lastHistoryValue = lastHistoryIndex >= 0 ? cellAmountHistory[lastHistoryIndex] : null
        const valueIsNew = lastHistoryIndex >= 0  ? (amount !== lastHistoryValue) : null
        let nextLength 

        if (lengthOfStack === 0) {
            setCellAmountHistory([amount])
            // arrayOfHistories.push([amount])
            nextLength = 1
        } else {
            if (valueIsNew){
                console.log("new value")
                setCellAmountHistory([...cellAmountHistory, amount])
                // let ArrayOfHistoriesCopy = [...arrayOfHistories]
                // ArrayOfHistoriesCopy[arrayIndex] = [...cellAmountHistory, amount]
                // updateArrayOfHistories(ArrayOfHistoriesCopy)
                nextLength = lengthOfStack + 1
            } else {
                nextLength = lengthOfStack
            }
        }
        renderUndoIcon(nextLength)
    }, [amount, incomingDeletion])


    useEffect(() => {
        const anIconWasActivated = (showIncomeDeleteIcons | showUndoIcon) == true 
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showIncomeDeleteIcons, showUndoIcon])



    {/*  FUNCTIONS */}


    const useStyles = makeStyles({
        ...unconditionalStyles,
        row : {
            height: "38px",
            maxHeight: "38px",
            backgroundColor: rowColor
        },
    })
    
    const classes = useStyles()


    const handleDeleteIncome = (e) => {
        e.preventDefault()
        try {
            // console.log("newIncomes:", newIncomes)
            const incomeIndex = e.currentTarget.id
            let newIncomesCopy = [...newIncomes]
            newIncomesCopy.splice(incomeIndex, 1)
            // console.log('newIncomesCopy after splice: ', newIncomesCopy)
            setNewIncomes(newIncomesCopy)
            // this may not work for index 0
            setIncomingDeletion(true)
            // let ArrayOfHistoriesCopy = [...arrayOfHistories]
            // ArrayOfHistoriesCopy.pop()
            // updateArrayOfHistories(ArrayOfHistoriesCopy)
            if (!userMadeChanges) {
                toggleChanges(true)
            }
            updateBudget(tick + 1)
        } catch (error) {
            console.log(error)
        }
    }


    const renderUndoIcon = (newLength) => {
        if (newLength >= 2) {
            setShowUndoIcon(true)
            setFourColumns(true)
        } else {
            setShowUndoIcon(false)
            setFourColumns(false)
        }
    }

    const restoreLastValue = (e) => {
        e.preventDefault()
        let newIncomesCopy = newIncomes
        let historyCopy = cellAmountHistory

        // console.log("history copy:",  historyCopy)

        const currentAmount = historyCopy.pop()
        const previousAmount = historyCopy[historyCopy.length - 1]

        // console.log("currentAmount:",  currentAmount)
        // console.log("history after pop:",  historyCopy)

        const previousRow = {
            source: source, 
            amount: previousAmount
        }

        newIncomesCopy[arrayIndex] = previousRow
        setCellAmountHistory(historyCopy)

        setNewIncomes(newIncomesCopy)
        updateBudget(tick + 1)
    }


    const propsForSource = {
        defaultValue: source
    }

    const propsForMonthly = {
        defaultValue: monthly,
        isAnnual: false
    }

    const propsForAnnual = {
        defaultValue: amount,
        isAnnual: true
    }

    console.log(props)
    return (
        <TableRow
            className={classes.row}
        >
            <TableCell 
                size="small" 
                className={classes.iconCell}
                style={{width: "30px"}}
            >
                {iconShouldShow && (
                    <Fade in={iconShouldShow}>
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
                                    className={classes.undoIcon} 
                                    fontSize="small"
                                />
                            </IconButton>
                        }
                    </Fade>
                )}
            </TableCell>

            <IncomeSourceCell 
                {...props}
                fromIncomeRow={{...propsForSource}} 
            />
            <IncomeNumberCell 
                {...props}
                align="right"
                fromIncomeRow={{...propsForMonthly}}
            />
            <IncomeNumberCell 
                {...props}
                align="right"
                fromIncomeRow={{...propsForAnnual}}
            />
        </TableRow>
    )
}

export default IncomeRow

