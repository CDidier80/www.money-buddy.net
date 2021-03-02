import { 
    TableRow,
    TableCell, 
    makeStyles,
    useMediaQuery
} from '@material-ui/core'
import React, { useState, useEffect } from "react"
import { staticStyles }  from  "./styles/staticStyles"
import IncomeNumberCell  from  "../Cells/IncomeNumberCell"
import IncomeSourceCell  from  "../Cells/IncomeSourceCell"
import UndoIconButton    from  "./components/UndoIconButton"
import DeleteIncomeIcon  from  "./components/DeleteIncomeIcon"


const IncomeRow = (props) => {

    /* -------------------------- PROPS -------------------------- */
    
    const { showIncomeDeleteIcons } = props.fromIncomeAccordion
    
    const { newIncomes } = props.fromBudget

    const {
        source,
        amount,
        rowColor,
        arrayIndex,
        onlyTwoCells,
        annualToggled,
        incomingDeletion,
        setIncomingDeletion,
    } = props.fromIncomeTable


    const monthly = Math.round(amount / 12)
    
    /* -------------------------- STATE -------------------------- */
    
    const [ cellAmountHistory, setCellAmountHistory ] = useState([])
    const [ iconShouldShow, setIconShouldShow ] = useState(false)
    const [ showUndoIcon, setShowUndoIcon ] = useState(false)

    /* -------------- MEDIA QUERIES (del/undo icon----------------- */

    const smallerIcons = useMediaQuery('(max-width: 393px)', { noSsr: true })

    /* -------------------------- useEffect -------------------------- */

    useEffect(() => {
        if(incomingDeletion){
            setCellAmountHistory([amount])
            if (arrayIndex === newIncomes.length-1){
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
            nextLength = 1
        } else {
            if (valueIsNew){
                setCellAmountHistory([...cellAmountHistory, amount])
                nextLength = lengthOfStack + 1
            } else { nextLength = lengthOfStack }
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


    /* -------------------------- FUNCTIONS -------------------------- */


    const useStyles = makeStyles({
        ...staticStyles,
        row : {
            backgroundColor: rowColor,
            maxHeight: "38px",
            height: "38px",
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
    
    /* ---------------------- PROPS FOR CHILDREN ---------------------- */

    const propsForUndoIcon = {
        smallerIcons: smallerIcons,
        setCellAmountHistory,
        cellAmountHistory, 
        iconShouldShow
    }

    const propsForSource = {
        defaultValue: source,
    }

    const propsForMonthly = {
        defaultValue: monthly,
        isAnnual: false,
    }

    const propsForAnnual = {
        defaultValue: amount,
        isAnnual: true,
    }

    const iconCellWidth = {width: (smallerIcons ? "25px" : "35px")}

    return (
        <TableRow
            className={classes.row}
        >
            <TableCell 
                size="small" 
                className={classes.iconCell}
                style={iconCellWidth}
            >
                {iconShouldShow && ( showIncomeDeleteIcons ? 

                    <DeleteIncomeIcon 
                        {...props} 
                        smallerIcons={smallerIcons}
                    />
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

            {onlyTwoCells ? !annualToggled ?
                <IncomeNumberCell 
                    {...props}
                    align="right"
                    onlyTwoCells={true}
                    fromIncomeRow={{...propsForMonthly}}
                />
                :
                <IncomeNumberCell 
                    {...props}
                    align="right"
                    onlyTwoCells={true}
                    fromIncomeRow={{...propsForAnnual}}
                />
            :
                (<>
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
                </>)
            }
        </TableRow>
    )
}

export default IncomeRow

