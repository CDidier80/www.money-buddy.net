import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import "./editableCell.css"


const ExpenseTextCell = (props) => {
    
    {/*  PROPS  */}

    const { tick, updateBudget } = props.budgetTicker

    const { 
        defaultValue, 
        categoryIndex, 
        expenseIndex, 
        category 
    } = props

    const { 
        newCategories, 
        setNewCategories, 
        userMadeChanges, 
        toggleChanges 
    } = props.categoryHooks


    {/*  STATE  */}

    const [ newText, updateText ] = useState(defaultValue)


    {/* FUNCTIONS */}

    useEffect(() => {
        updateText(props.defaultValue)
    }, [props.defaultValue])

    
    const handleSubmit = (e) => {
        e.preventDefault()
        return
    }


    const updateNewCategories = (value) => {
        let categoriesArrayCopy = newCategories
        let categoryCopy = category
        categoryCopy["expenses"][expenseIndex]['expense'] = value
        categoriesArrayCopy[categoryIndex] = categoryCopy
        setNewCategories(categoriesArrayCopy)
        updateBudget(tick + 1)
    }


    const handleText = (e) => {
        const { value } = e.target
        updateText(value)
        updateNewCategories(value)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
    }


    return (
        <TableCell>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    name="text-input"
                    type="text" 
                    value={newText} 
                    className="editable-cell expense"
                    onChange={(e) => handleText(e)}
                >
                </input>
            </form>
        </TableCell>
        )
}

export default ExpenseTextCell