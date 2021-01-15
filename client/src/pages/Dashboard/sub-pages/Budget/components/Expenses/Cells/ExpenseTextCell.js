import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import "./editableCell.css"


const ExpenseTextCell = (props) => {
    
    {/*  PROPS  */}

    const { 
        newCategories,
        setNewCategories, 
        toggleChanges,
        userMadeChanges,
        updateBudget, 
        tick
    } = props.fromBudget

    const { category } = props.fromExpenseAccordion

    const { expenseIndex, rowColor} = props.fromExpenseTable

    const { 
        defaultValue, 
        categoryIndex, 
    } = props.fromExpenseRow


    {/*  STATE  */}

    const [ newText, updateText ] = useState("")
    const [ focused, setFocus ] = useState(false)

    {/* FUNCTIONS */}

    useEffect(() => {
        updateText(defaultValue)
    }, [defaultValue])


    const updateNewCategories = (value) => {
        let categoriesArrayCopy = [...newCategories]
        let categoryCopy = {...category}
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
        updateNewCategories(newText)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        updateBudget(tick + 1)
        setFocus(false)
        return false
    }

    const backgroundColor = {backgroundColor:rowColor}


    return (
        <TableCell>
            <form onSubmit={(e) => submit(e)}
            style={backgroundColor}>
                <input 
                style={backgroundColor}
                    name="text-input"
                    type="text" 
                    value={newText} 
                    className="editable-cell expense"
                    onSelect={(e) => setFocus(true)}
                    onChange={(e) => handleText(e)}
                    onBlur={(e) => submit(e)}
                >
                </input>
            </form>
        </TableCell>
        )
}

export default ExpenseTextCell