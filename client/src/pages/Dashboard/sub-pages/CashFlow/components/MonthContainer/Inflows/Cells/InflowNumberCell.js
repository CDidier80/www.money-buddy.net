import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { filterNumbers, formatToCurrency } from "./modules/cellFunctions"
import { makeStyles } from '@material-ui/core'


const InflowNumberCell = (props) => {

    {/*  PROPS  */}

    // const { 
    //     userMadeChanges, 
    //     toggleChanges, 
    //     newinflows, 
    //     setNewinflows,
    //     updateBudget,
    //     tick
    // } = props.fromBudget

    // const { 
    //     arrayIndex, 
    //     rowColor
    // } = props.frominflowTable

    // const { 
    //     isAnnual, 
    //     defaultValue
    // } = props.frominflowRow


    {/*  STATE  */}

    const [ newText, updateText ] = useState("")
    const [ rawNumber, updateRawNumber] = useState(0)
    const [ focused, setFocus ] = useState(false)
    

    {/* useEffect */}

    useEffect(() => {
        // console.log("defauleValue: ", defaultValue)
        const currency = formatToCurrency(defaultValue)
        updateRawNumber(defaultValue)
        updateText(currency)
    }, [defaultValue])


    
    {/* FUNCTIONS */}


    const useStyles = makeStyles({
        cell: {
            backgroundColor: rowColor
        }
    })

    const classes = useStyles()


    const updateInflows = (value) => {
        let numValue = parseInt(value)
        numValue = isAnnual ? numValue : Math.round(numValue * 12)
        let replacementArray = [...newInflows]
        let inflowObject = newInflows[arrayIndex]
        inflowObject.amount = numValue
        replacementArray[arrayIndex] = inflowObject
        setNewinflows(replacementArray)
    }


    const submit = (e) => {
        // console.log(e.target)
        e.preventDefault()
        document.activeElement.blur()
        // setCellHistory([...cellHistory, rawNumber])
        updateInflows(rawNumber)
        updateText(formatToCurrency(rawNumber))
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        updateInflows(tick + 1)
        setFocus(false)
        return false
    }

    const backgroundColor = {backgroundColor:rowColor}

    return (
        <TableCell className={classes.cell}>
            <form 
                onSubmit={(e) => submit(e)} 
                style={backgroundColor}
            >
                <input 
                    style={backgroundColor}
                    name="text-input"
                    type="text" 
                    value={focused ? rawNumber : newText}  
                    className="editable-cell inflow"
                    onSelect={(e) => setFocus(true)}
                    onChange={(e) => filterNumbers(e, updateRawNumber)}
                    onBlur={(e) => submit(e)}
                >
                </input>
            </form>
        </TableCell>
    )
}

export default InflowNumberCell