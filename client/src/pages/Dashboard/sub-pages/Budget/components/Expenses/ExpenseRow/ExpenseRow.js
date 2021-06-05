import React, {useEffect, useState} from 'react'
import ExpenseNumberCell from "../Cells/ExpenseNumberCell"
import ExpenseTextCell  from "../Cells/ExpenseTextCell"
import DeleteExpenseIcon from './components/DeleteExpenseIcon'
import UndoIcon from "./components/UndoIcon"
import { 
    makeStyles, 
    IconButton,
    TableCell, 
    TableRow,
    Fade
} from '@material-ui/core'


const ExpenseRow = (props) => {

    
    {/*  PROPS */}

    const {
        showExpenseDeleteIcons
    } = props.fromCategoryAccordion

    const {
        arrayIndex
    } = props.fromExpenseAccordion

    const {
        expense,
        expenseIndex,
        amount, 
        monthly,
        incomingDeletion, 
        setIncomingDeletion,
        rowColor
    } = props.fromExpenseTable


    {/*  STATE  */}

    const [ cellAmountHistory, setCellAmountHistory ] = useState([])
    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)


    {/*  useEffect */}

    // useEffect(() => {
        // if(incomingDeletion){
        //     setCellAmountHistory([amount])
        //     if (arrayIndex === newIncomes.length-1){
        //         console.log("last elem")
        //         setIncomingDeletion(false)
        //     }
        //     return
        // }
        // const lengthOfStack = cellAmountHistory.length
        // const lastHistoryIndex = lengthOfStack - 1
        // const lastHistoryValue = lastHistoryIndex >= 0 ? cellAmountHistory[lastHistoryIndex] : null
        // const valueIsNew = lastHistoryIndex >= 0  ? (amount !== lastHistoryValue) : null
        // let nextLength 

        // if (lengthOfStack === 0) {
        //     setCellAmountHistory([amount])
        //     // arrayOfHistories.push([amount])
        //     nextLength = 1
        // } else {
        //     if (valueIsNew){
        //         console.log("new value")
        //         setCellAmountHistory([...cellAmountHistory, amount])
        //         // let ArrayOfHistoriesCopy = [...arrayOfHistories]
        //         // ArrayOfHistoriesCopy[arrayIndex] = [...cellAmountHistory, amount]
        //         // updateArrayOfHistories(ArrayOfHistoriesCopy)
        //         nextLength = lengthOfStack + 1
        //     } else {
        //         nextLength = lengthOfStack
        //     }
        // }
        // renderUndoIcon(nextLength)
    // }, [ ])


    useEffect(() => {
        const anIconWasActivated = (showExpenseDeleteIcons | showUndoIcon) == true 
        // console.log('an icon was activated', anIconWasActivated)
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showExpenseDeleteIcons, showUndoIcon])



    {/*  FUNCTIONS */}

    const useStyles = makeStyles( theme => {

        return ({
            row: {
                height: "38px",
                maxHeight: "38px",
                backgroundColor: rowColor
                
            },
            iconCell: {
                maxWidth: "36px",
                padding: "0px"
            },
            iconButton: {
                marginRight: "11px",
                "&:hover" : {
                    backgroundColor: "#ffcece65"
                }
            },
            deleteIcon: {
                color: "red",
                fontSize: "13px"
            },
            undoIcon: {
                color: "lightgray",
            }
        })
        }
    )

    const classes = useStyles(props.theme)

    // const renderUndoIcon = (newLength) => {
    //     if (newLength >= 2) {
    //         setShowUndoIcon(true)
    //     } else {
    //         setShowUndoIcon(false)
    //     }
    // }


    const propsForUndoIcon = {
        cellAmountHistory,
        setCellAmountHistory,
        showUndoIcon,
        setShowUndoIcon,
        iconShouldShow,
        setIconShouldShow
    } 

    const propsForExpense = {
        defaultValue: expense
    }

    const propsForMonthly = {
        defaultValue: monthly,
        isAnnual: false
    }

    const propsForAnnual = {
        defaultValue: amount,
        isAnnual: true
    }

    return (
        <TableRow
            className={classes.row}
        >
            <TableCell 
                size="small" 
                className={classes.iconCell}
                style={{width: "30px"}}
            >
                {/* {iconShouldShow && (
                    <Fade in={iconShouldShow}>
                        {showExpenseDeleteIcons ?
                            <DeleteExpenseIcon 
                                {...props}
                            />

                            :

                            <UndoIcon 
                                {...props}
                                id={arrayIndex}
                                fromExpenseRow={{...propsForUndoIcon}}
                            />
                        }
                    </Fade>
                )} */}

                {showExpenseDeleteIcons && (
                    <Fade in={iconShouldShow}>
        
                            <DeleteExpenseIcon 
                                {...props}
                            />
                    </Fade>
                )}
            </TableCell>

            
            <ExpenseTextCell 
                align="right"
                {...props}
                fromExpenseRow={{...propsForExpense}}
            />
            <ExpenseNumberCell 
                {...props}
                align="right"
                fromExpenseRow={{...propsForMonthly}}
            />
            <ExpenseNumberCell 
                {...props}
                fromExpenseRow={{...propsForAnnual}}
                align="right"
            />
        </TableRow>
    )
}

export default ExpenseRow
