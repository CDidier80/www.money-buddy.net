import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { filterNumbers, formatToCurrency } from "./modules/cellFunctions"

const ExpenseNumberCell = (props) => {

    {/*  PROPS */}

    const { 
        defaultValue,
        isAnnual, 
    } = props.fromExpenseRow

    const { 
        newCategories,
        setNewCategories, 
        toggleChanges,
        userMadeChanges,
        updateBudget, 
        tick
    } = props.fromBudget

    const { 
        categoryIndex,
        category
    } = props.fromExpenseAccordion

    const {
        expense,
        amount, 
        monthly,
        expenseIndex,
        incomingDeletion, 
        setIncomingDeletion,
        handleDeleteExpense
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
        updateBudget(tick + 1)
        setFocus(false)
        return false
    }


    return (
        <TableCell>
            <form onSubmit={(e) => submit(e)}>
                <input 
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