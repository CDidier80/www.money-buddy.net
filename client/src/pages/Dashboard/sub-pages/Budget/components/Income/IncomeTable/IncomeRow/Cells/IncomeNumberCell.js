import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { filterNumbers, formatToCurrency } from "./modules/cellFunctions"
import { makeStyles } from '@material-ui/core'


const IncomeNumberCell = (props) => {

    {/*  PROPS  */}

    const { 
        userMadeChanges, 
        toggleChanges, 
        newIncomes, 
        setNewIncomes,
        updateBudget,
        tick
    } = props.fromBudget

    const { 
        arrayIndex, 
        rowColor
    } = props.fromIncomeTable

    const { 
        isAnnual, 
        defaultValue
    } = props.fromIncomeRow


    {/*  STATE  */}

    const [ newText, updateText ] = useState("")
    const [ rawNumber, updateRawNumber] = useState(0)
    const [ focused, setFocus ] = useState(false)
    

    {/* useEffect */}

    useEffect(() => {
        // console.log("defauleValue: ", defaultValue)
        const currency = formatToCurrency(defaultValue)
        updateRawNumber(defaultValue)
        updateText(currency)
    }, [defaultValue])


    
    {/* FUNCTIONS */}


    const useStyles = makeStyles({
        cell: {
            backgroundColor: rowColor
        }
    })

    const classes = useStyles()


    const updateIncomes = (value) => {
        let numValue = parseInt(value)
        numValue = isAnnual ? numValue : Math.round(numValue * 12)
        let replacementArray = [...newIncomes]
        let incomeObject = newIncomes[arrayIndex]
        incomeObject.amount = numValue
        replacementArray[arrayIndex] = incomeObject
        setNewIncomes(replacementArray)
    }


    const submit = (e) => {
        // console.log(e.target)
        e.preventDefault()
        document.activeElement.blur()
        // setCellHistory([...cellHistory, rawNumber])
        updateIncomes(rawNumber)
        updateText(formatToCurrency(rawNumber))
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        updateBudget(tick + 1)
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
                    className="editable-cell income"
                    onSelect={(e) => setFocus(true)}
                    onChange={(e) => filterNumbers(e, updateRawNumber)}
                    onBlur={(e) => submit(e)}
                >
                </input>
            </form>
        </TableCell>
    )
}

export default IncomeNumberCell