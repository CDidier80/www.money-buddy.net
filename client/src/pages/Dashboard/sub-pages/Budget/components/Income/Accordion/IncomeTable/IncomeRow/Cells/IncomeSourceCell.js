import { TableCell } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

const IncomeSourceCell = (props) => {

    {/*  PROPS  */}

    const { 
        setNewIncomes, 
        newIncomes, 
        toggleChanges, 
        userMadeChanges,
        tick,
        updateBudget
    } = props.fromBudget

    const { arrayIndex } = props.fromIncomeTable

    const {
        defaultValue
    } = props.fromIncomeRow


    {/*  STATE  */}

    const [ newText, updateText ] = useState("")
    const [ focused, setFocus ] = useState(false)


    {/* FUNCTIONS */}

    useEffect(() => {
        updateText(defaultValue)
    }, [defaultValue])


    const updateNewIncomes = (value) => {
        let replacementArray = [...newIncomes]
        let incomeObject = newIncomes[arrayIndex]
        incomeObject.source = value
        replacementArray[arrayIndex] = incomeObject
        setNewIncomes(replacementArray)
    }


    const handleText = (e) => {
        const { value } = e.target
        updateText(value)
    }

    const submit = (e) => {
        e.preventDefault()
        document.activeElement.blur()
        updateNewIncomes(newText)
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

export default IncomeSourceCell


