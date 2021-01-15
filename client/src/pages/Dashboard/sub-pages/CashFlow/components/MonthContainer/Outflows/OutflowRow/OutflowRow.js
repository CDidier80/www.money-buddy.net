import React, {useEffect, useState} from 'react'
import OutflowNumberCell from "../Cells/OutflowNumberCell"
import OutflowTextCell  from "../Cells/OutflowTextCell"
import IconCell from "../Cells/IconCell/IconCell"
import { makeStyles, TableRow, } from '@material-ui/core'



const OutflowRow = (props) => {

    
    {/*  PROPS */}

    const {
        showOutflowDeleteIcons
    } = props.fromCategoryAccordion

    const {
        categoryIndex
    } = props.fromOutflowsAccordion

    const {
        outflow,
        outflowIndex,
        amount, 
        incomingDeletion, 
        setIncomingDeletion,
        rowColor
    } = props.fromOutflowTable


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
        const anIconWasActivated = (showOutflowDeleteIcons | showUndoIcon) == true 
        // console.log('an icon was activated', anIconWasActivated)
        if (anIconWasActivated && iconShouldShow == false) {
            console.log("setting icon should should show to true")

                setIconShouldShow(true)
        } else {
            // console.log("setting icon should show to false")
            setIconShouldShow(false)
        }
    }, [showOutflowDeleteIcons, showUndoIcon])



    {/*  FUNCTIONS */}

    const useStyles = makeStyles({
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

    const classes = useStyles()

    // const renderUndoIcon = (newLength) => {
    //     if (newLength >= 2) {
    //         setShowUndoIcon(true)
    //     } else {
    //         setShowUndoIcon(false)
    //     }
    // }


    // const propsForUndoIcon = {
    //     cellAmountHistory,
    //     setCellAmountHistory,
    //     showUndoIcon,
    //     setShowUndoIcon,
    //     iconShouldShow,
    //     setIconShouldShow
    // } 

    const propsForOutlow = {
        defaultValue: outflow
    }

    const propsForMonthly = {
        defaultValue: amount,
        isAnnual: false
    }

    return (
        <TableRow
            className={classes.row}
        >
            <IconCell 
                {...props}
                fromOutflowRow={{...propsForIconCell}}
            />
            <OutflowTextCell 
                align="right"
                {...props}
                fromOutflowRow={{...propsForOutlow}}
            />
            <OutflowNumberCell 
                {...props}
                align="right"
                fromOutflowRow={{...propsForMonthly}}
            />
        </TableRow>
    )
}

export default OutflowRow
