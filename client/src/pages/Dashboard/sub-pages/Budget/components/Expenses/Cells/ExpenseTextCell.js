import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import "./editableCell.css"


const ExpenseTextCell = (props) => {
    
    /*  PROPS  */

    const { 
        tick,
        updateBudget, 
        newCategories,
        toggleChanges,
        setNewCategories, 
    } = props.fromBudget

    const { category } = props.fromExpenseAccordion

    const { expenseIndex, rowColor} = props.fromExpenseTable

    const { 
        defaultValue, 
        categoryIndex, 
    } = props.fromExpenseRow

    /*  STATE  */

    const [ newText, updateText ] = useState("")

    /* FUNCTIONS */

    useEffect(() => {
        updateText(defaultValue)
    }, [defaultValue])


    const updateNewCategories = (value) => {
        let categoriesArrayCopy = [...newCategories]
        let categoryCopy = { ...category }
        categoryCopy["expenses"][expenseIndex]['expense'] = value
        categoriesArrayCopy[categoryIndex] = categoryCopy
        setNewCategories(categoriesArrayCopy)
        updateBudget(tick + 1)
    }

    const handleText = (e) => {
        const { value } = e.target
        updateText(value)
    }

    const submit = (e) => {
        e.preventDefault()
        document.activeElement.blur()
        if (newText !== defaultValue) {
            updateNewCategories(newText)
            updateBudget(tick + 1)
            toggleChanges(true)
        }
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
                    className="editable-cell expense"
                    onChange={(e) => handleText(e)}
                    onBlur={(e) => submit(e)}
                    style={backgroundColor}
                    name="text-input"
                    value={newText} 
                    type="text" 
                >
                </input>
            </form>
        </TableCell>
        )
}

export default ExpenseTextCell