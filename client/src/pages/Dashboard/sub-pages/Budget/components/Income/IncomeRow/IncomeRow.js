import React, { useState, useEffect } from 'react';
import IncomeNumberCell from "../Cells/IncomeNumberCell"
import IncomeSourceCell from "../Cells/IncomeSourceCell"
// import HighlightOffIcon from '@material-ui/icons/HighlightOff'
// import UndoIcon from '@material-ui/icons/Undo';
import UndoIconButton from "./components/UndoIconButton"
import { staticStyles } from "./styles/staticStyles"
import DeleteIncomeIcon from "./components/DeleteIncomeIcon"
import { 
    TableCell, 
    TableRow,
    makeStyles
} from '@material-ui/core'
import Undo from '@material-ui/icons/Undo';


const IncomeRow = (props) => {

    {/*  PROPS */}
    
    const { showIncomeDeleteIcons } = props.fromIncomeAccordion
    
    const { newIncomes } = props.fromBudget

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
        ...staticStyles,
        row : {
            height: "38px",
            maxHeight: "38px",
            backgroundColor: rowColor
        },
    })
    
    const classes = useStyles()



    const renderUndoIcon = (newLength) => {
        if (newLength >= 2) {
            setShowUndoIcon(true)
        } else {
            setShowUndoIcon(false)
        }
    }


    const propsForUndoIcon = {
        cellAmountHistory, 
        setCellAmountHistory,
        iconShouldShow
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

    
    return (
        <TableRow
            className={classes.row}
        >
            <TableCell 
                size="small" 
                className={classes.iconCell}
                style={{width: "30px"}}
            >
                {iconShouldShow && ( showIncomeDeleteIcons ? 

                    <DeleteIncomeIcon {...props} />
                    :
                    <UndoIconButton 
                        {...props} 
                        fromIncomeRow={{...propsForUndoIcon}}
                    />
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

