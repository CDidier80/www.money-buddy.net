import { TableCell } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useIncomeSourceCellStyles } from "../styles/useIncomeStyles"


const IncomeSourceCell = (props) => {

    /*  PROPS  */

    const { 
        userMadeChanges,
        setNewIncomes, 
        toggleChanges, 
        updateBudget,
        newIncomes, 
        tick,
    } = props.fromBudget

    const { 
        arrayIndex, 
        rowColor,
    } = props.fromIncomeTable

    const { defaultValue } = props.fromIncomeRow


    /*  STATE  */

    const [ newText, updateText ] = useState("")
    const [ focused, setFocus ] = useState(false)


    /* FUNCTIONS */

    useEffect(() => {
        updateText(defaultValue)
    }, [defaultValue])


    const classes = useIncomeSourceCellStyles(rowColor)
    

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
        if(defaultValue !== newText){
            toggleChanges(true)
            updateBudget(tick + 1)
        }
        setFocus(false)
        return false
    }


    return (
        <TableCell className={classes.cell}>
            <form 
                style={{backgroundColor: rowColor}}
                onSubmit={(e) => submit(e)}
            >
                <input 
                    className={`${classes.input} editable-cell income`}
                    onSelect={(e) => setFocus(true)}
                    onChange={(e) => handleText(e)}
                    onBlur={(e) => submit(e)}
                    name="text-input"
                    value={newText} 
                    type="text" 
                >
                </input>
            </form>
        </TableCell>
    )
}

export default IncomeSourceCell


