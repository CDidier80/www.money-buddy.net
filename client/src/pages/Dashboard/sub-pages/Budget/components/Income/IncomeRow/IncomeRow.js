import { 
    TableRow,
    TableCell, 
    makeStyles,
    useMediaQuery
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { staticStyles }  from  './styles/staticStyles'
import IncomeNumberCell  from  '../Cells/IncomeNumberCell'
import IncomeSourceCell  from  '../Cells/IncomeSourceCell'
import UndoIconButton    from  './components/UndoIconButton'
import DeleteIncomeIcon  from  './components/DeleteIncomeIcon'


const IncomeRow = props => {
    
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
    
    const [ cellAmountHistory, setCellAmountHistory ] = useState([])
    const [ iconShouldShow, setIconShouldShow ] = useState(false)
    const [ showUndoIcon, setShowUndoIcon ] = useState(false)

    const smallerIcons = useMediaQuery('(max-width: 393px)', { noSsr: true })

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
        const anIconWasActivated = (showIncomeDeleteIcons | showUndoIcon) === true 
        if (anIconWasActivated && iconShouldShow === false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showIncomeDeleteIcons, showUndoIcon])

    const useStyles = makeStyles({
        ...staticStyles,
        row : {
            backgroundColor: rowColor,
            maxHeight: '38px',
            height: '38px'
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

    return (
        <TableRow
            className={classes.row}
        >
            <TableCell 
                size='small' 
                className={classes.iconCell}
                style={{ width: (smallerIcons ? '25px' : '35px') }}
            >
                {iconShouldShow && ( showIncomeDeleteIcons ? 

                    <DeleteIncomeIcon 
                        { ...props } 
                        smallerIcons={smallerIcons}
                    />
                    :
                    <UndoIconButton 
                        { ...props } 
                        fromIncomeRow={{
                            smallerIcons: smallerIcons,
                            setCellAmountHistory,
                            cellAmountHistory, 
                            iconShouldShow
                        }}
                    />
                )}
            </TableCell>
            <IncomeSourceCell 
                { ...props }
                fromIncomeRow={{ defaultValue: source }}
            />
            {onlyTwoCells ? !annualToggled ?
                <IncomeNumberCell 
                    { ...props }
                    align='right'
                    onlyTwoCells={true}
                    fromIncomeRow={{
                        defaultValue: monthly,
                        isAnnual: false
                    }}
                />
                :
                <IncomeNumberCell 
                    { ...props }
                    align='right'
                    onlyTwoCells={true}
                    fromIncomeRow={{
                        defaultValue: amount,
                        isAnnual: true
                    }}
                />
            :
                (<>
                    <IncomeNumberCell 
                        { ...props }
                        align='right'
                        fromIncomeRow={{
                            defaultValue: monthly,
                            isAnnual: false
                        }}
                    />

                    <IncomeNumberCell 
                        { ...props }
                        align='right'
                        fromIncomeRow={{
                            defaultValue: amount,
                            isAnnual: true
                        }}
                    />
                </>)
            }
        </TableRow>
    )
}

export default IncomeRow

