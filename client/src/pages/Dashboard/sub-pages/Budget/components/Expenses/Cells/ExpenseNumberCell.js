import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { filterNumbers, formatToCurrency } from "./modules/cellFunctions"

const ExpenseNumberCell = (props) => {

    {/*  PROPS */}

    const { 
        isAnnual, 
        defaultValue,
    } = props.fromExpenseRow

    const { 
        tick,
        updateBudget, 
        toggleChanges,
        newCategories,
        userMadeChanges,
        setNewCategories, 
    } = props.fromBudget

    const { 
        category,
        categoryIndex,
    } = props.fromExpenseAccordion

    const {
        rowColor,
        expenseIndex,
    } = props.fromExpenseTable


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
        categoryCopy["expenses"][expenseIndex]['amount'] = numValue
        categoriesArrayCopy[categoryIndex] = categoryCopy
        setNewCategories(categoriesArrayCopy)
    }


    const submit = (e) => {
        e.preventDefault()
        document.activeElement.blur()
        // setCellHistory([...cellHistory, rawNumber])
        if (rawNumber !== defaultValue){
            updateNewCategories(rawNumber)
            updateText(formatToCurrency(rawNumber))
            updateBudget(tick + 1)
            toggleChanges(true)
        }
        setFocus(false)
        return false
    }

    const backgroundColor = {backgroundColor:rowColor}

    return (
        <TableCell>
            <form onSubmit={(e) => submit(e)}
            style={backgroundColor}
            >
                <input 
                    style={backgroundColor}
                    name="text-input"
                    type="text" 
                    value={focused ? rawNumber : newText } 
                    className="editable-cell expense"
                    onSelect={(e) => setFocus(true)}
                    onChange={(e) => filterNumbers(e, updateRawNumber)}
                    onBlur={(e) => submit(e)}
                >
                </input>
            </form>
        </TableCell>
    )
}

export default ExpenseNumberCell