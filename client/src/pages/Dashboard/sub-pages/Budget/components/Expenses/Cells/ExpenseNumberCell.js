import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { filterNumbers } from "./modules/cellFunctions"

const ExpenseNumberCell = (props) => {

    {/*  PROPS */}

    const { tick, updateBudget } = props.budgetTicker

    const { 
        categoryIndex, 
        expenseIndex, 
        category, 
        isAnnual, 
        categoryHooks,
    } = props

    const { 
        newCategories, 
        setNewCategories, 
        userMadeChanges, 
        toggleChanges 
    } = categoryHooks


    {/*  STATE  */}

    const [ newText, updateText ] = useState("")
    const [ rawNumber, updateRawNumber] = useState(0)
    const [ focused, setFocus ] = useState(false)


    {/*  FUNCTIONS */}

    useEffect(() => {
        updateText(props.defaultValue)
    }, [props.defaultValue])


    const handleSubmit = (e) => {
        e.preventDefault()
        return
    }


    const updateNewCategories = (value) => {
        let numValue = parseInt(value)
        numValue = isAnnual ? numValue : Math.round(numValue * 12)
        let categoriesArrayCopy = newCategories
        let categoryCopy = category
        categoryCopy["expenses"][expenseIndex]['amount'] = numValue
        categoriesArrayCopy[categoryIndex] = categoryCopy
        setNewCategories(categoriesArrayCopy)
    }


    const updateAllState = (value) => {
        updateText(value)
        updateNewCategories(value)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        updateBudget(tick + 1)
    } 

    return (
        <TableCell>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    name="text-input"
                    type="text" 
                    value={focused ? rawNumber : newText } 
                    className="editable-cell expense"
                    onChange={(e) => filterNumbers(e, updateRawNumber)}
                    onSelect={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                >
                </input>
            </form>
        </TableCell>
    )
}

export default ExpenseNumberCell