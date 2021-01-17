import React, {useEffect, useState} from 'react'
import InflowNumberCell from "../Cells/InflowNumberCell"
import InflowTextCell from "../Cells/InflowTextCell"
import IconCell from "../Cells/IconCell/IconCell"
import { TableRow, } from '@material-ui/core/'

const InflowRow = (props) => {

    const { 
        showInflowDeleteIcons,
        toggleInflowDeleteIcons,
    } = props.fromInflowsAccordion

    const {
        source, 
        amount,
        rowIndex,
        incomingDeletion,
        setIncomingDeletion,
        rowColor
    } = props.fromInflowsTable

{/*  STATE */}

    const [ cellAmountHistory, setCellAmountHistory ] = useState([])
    const [ showUndoIcon, setShowUndoIcon ] = useState(false)
    const [ iconShouldShow, setIconShouldShow ] = useState(false)


    {/*  useEffect */}


    // useEffect(() => {
    //     if(incomingDeletion){
    //         setCellAmountHistory([amount])
    //         if (arrayIndex === newIncomes.length-1){
    //             console.log("last elem")
    //             setIncomingDeletion(false)
    //         }
    //         return
    //     }
    //     const lengthOfStack = cellAmountHistory.length
    //     const lastHistoryIndex = lengthOfStack - 1
    //     const lastHistoryValue = lastHistoryIndex >= 0 ? cellAmountHistory[lastHistoryIndex] : null
    //     const valueIsNew = lastHistoryIndex >= 0  ? (amount !== lastHistoryValue) : null
    //     let nextLength 
    //     if (lengthOfStack === 0) {
    //         setCellAmountHistory([amount])
    //         nextLength = 1
    //     } else {
    //         if (valueIsNew){
    //             console.log("new value")
    //             setCellAmountHistory([...cellAmountHistory, amount])
    //             nextLength = lengthOfStack + 1
    //         } else {
    //             nextLength = lengthOfStack
    //         }
    //     }
    //     renderUndoIcon(nextLength)
    // }, [amount, incomingDeletion])


    useEffect(() => {
        const anIconWasActivated = (showInflowDeleteIcons | showUndoIcon) == true 
        if (anIconWasActivated && iconShouldShow == false) {
                setIconShouldShow(true)
        } else {
            setIconShouldShow(false)
        }
    }, [showInflowDeleteIcons, showUndoIcon])


    // const renderUndoIcon = (newLength) => {
    //     if (newLength >= 2) {
    //         setShowUndoIcon(true)
    //     } else {
    //         setShowUndoIcon(false)
    //     }
    // }


    const propsForIconCell = {
        cellAmountHistory, 
        setCellAmountHistory,
        iconShouldShow,
        setIconShouldShow,
        showUndoIcon,
        setShowUndoIcon
    }

    const propsForSource = {
        defaultValue: source
    }

    const propsForMonthly = {
        defaultValue: amount,
        isAnnual: false
    }

    return (
        <TableRow>
            <IconCell 
                {...props}
                fromInflowRow={{...propsForIconCell}}
            />
            <InflowTextCell 
                {...props}
                fromInflowRow={{...propsForSource}}
            />

            <InflowNumberCell 
                align="right"
                {...props}
                fromInflowRow={{...propsForMonthly}}
            />
        </TableRow>
    )
}

export default InflowRow
