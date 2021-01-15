import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { filterNumbers, formatToCurrency } from "./modules/cellFunctions"
import { makeStyles } from '@material-ui/core'


const OutflowNumberCell = (props) => {

    {/*  PROPS  */}

    const { 
        userMadeChanges, 
        toggleChanges, 
        updateCashflow,
        tick
    } = props.fromCashflow

    const { 
        monthlyOutflows, 
        setMonthlyOutflows,
        newFlowcategories,
        setNewFlowcategories,
    } = props.fromMonthContainer


    const { 
        rowIndex, 
        rowColor,
        flowcategory
    } = props.fromOutflowTable

    const { 
        isAnnual, 
        defaultValue
    } = props.fromOutflowRow


    {/*  STATE  */}

    const [ newText, updateText ] = useState("")
    const [ rawNumber, updateRawNumber] = useState(0)
    const [ focused, setFocus ] = useState(false)


    {/*  FUNCTIONS */}

    useEffect(() => {
        const currency = formatToCurrency(defaultValue)
        updateRawNumber(defaultValue)
        updateText(currency)
    }, [defaultValue])


    const updatenewFlowcategories = (value) => {
        let numValue = parseInt(value)
        numValue = isAnnual ? numValue : Math.round(numValue * 12)
        let flowcategoriesCopy = [...newFlowcategories]
        let thisFlowcategoryCopy = {...flowcategory}
        thisFlowcategoryCopy["outflows"][rowIndex]['amount'] = numValue
        flowcategoriesCopy[rowIndex] = thisFlowcategoryCopy
        console.log("flowcategoriesCopy", flowcategoriesCopy)
        setNewFlowcategories(flowcategoriesCopy)
    }


    const submit = (e) => {
        // console.log(e.target)
        e.preventDefault()
        document.activeElement.blur()
        // setCellHistory([...cellHistory, rawNumber])
        updatenewFlowcategories(rawNumber)
        updateText(formatToCurrency(rawNumber))
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        updateCashflow(tick + 1)
        setFocus(false)
        return false
    }

    const backgroundColor = {backgroundColor:rowColor}

    return (
        <TableCell>
            <form 
                onSubmit={(e) => submit(e)} 
                style={backgroundColor}
            >
                <input 
                    style={backgroundColor}
                    name="text-input"
                    type="text" 
                    value={focused ? rawNumber : newText}  
                    className="editable-cell Outflow"
                    onSelect={(e) => setFocus(true)}
                    onChange={(e) => filterNumbers(e, updateRawNumber)}
                    onBlur={(e) => submit(e)}
                >
                </input>
            </form>
        </TableCell>
    )
}

export default OutflowNumberCell