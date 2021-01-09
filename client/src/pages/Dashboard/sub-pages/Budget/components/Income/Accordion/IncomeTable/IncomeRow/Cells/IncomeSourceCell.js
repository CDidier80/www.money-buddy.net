import { TableCell } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

const IncomeSourceCell = (props) => {

    {/*  PROPS  */}

    const { defaultValue, arrayIndex } = props

    const { 
        setNewIncomes, 
        newIncomes, 
        toggleChanges, 
        userMadeChanges,
        tick,
        updateBudget
    } = props.fromBudget


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


    const updateNewIncomes = (value) => {
        let replacementArray = [...newIncomes]
        let incomeObject = newIncomes[arrayIndex]
        incomeObject.source = value
        replacementArray[arrayIndex] = incomeObject
        setNewIncomes(replacementArray)
        updateBudget(tick + 1)
    }


    const handleText = (e) => {
        const { value } = e.target
        updateText(value)
        updateNewIncomes(value)
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
                    className="editable-cell income"
                    onChange={(e) => handleText(e)}
                >
                </input>
            </form>
        </TableCell>
    )
}

export default IncomeSourceCell


