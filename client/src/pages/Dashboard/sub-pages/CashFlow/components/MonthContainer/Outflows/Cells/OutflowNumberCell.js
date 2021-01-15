import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { filterNumbers, formatToCurrency } from "./modules/cellFunctions"
import { makeStyles } from '@material-ui/core'


const OutflowNumberCell = (props) => {

    {/*  PROPS  */}

    const { 
        userMadeChanges, 
        toggleChanges, 
        newCategories, 
        setNewCategories,
        updateCashflow,
        tick
    } = props.fromCashflow

    const { 
        categoryIndex, 
        rowColor
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


    const updateNewCategories = (value) => {
        let numValue = parseInt(value)
        numValue = isAnnual ? numValue : Math.round(numValue * 12)
        let categoriesArrayCopy = [...newCategories]
        let categoryCopy = {...category}
        categoryCopy["outflows"][categoryIndex]['amount'] = numValue
        categoriesArrayCopy[categoryIndex] = categoryCopy
        console.log("categoriesArrayCopy", categoriesArrayCopy)
        setNewCategories(categoriesArrayCopy)
    }


    const submit = (e) => {
        // console.log(e.target)
        e.preventDefault()
        document.activeElement.blur()
        // setCellHistory([...cellHistory, rawNumber])
        updateNewCategories(rawNumber)
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