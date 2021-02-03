import { TableCell } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { filterNumbers, formatToCurrency } from "./modules/cellFunctions"
import { makeStyles } from '@material-ui/core'


const IncomeNumberCell = (props) => {

    /* -------------------- PROPS -------------------- */

    const { 
        userMadeChanges, 
        toggleChanges, 
        setNewIncomes,
        updateBudget,
        newIncomes, 
        tick
    } = props.fromBudget

    const { 
        arrayIndex, 
        rowColor,
        textSize,
    } = props.fromIncomeTable

    const { 
        defaultValue,
        isAnnual, 
    } = props.fromIncomeRow


    /* -------------------- STATE -------------------- */

    const [ newText, updateText ] = useState("")
    const [ rawNumber, updateRawNumber] = useState(0)
    const [ focused, setFocus ] = useState(false)
    

    /* ------------------- useEffect ------------------- */

    useEffect(() => {
        // console.log("defauleValue: ", defaultValue)
        const currency = formatToCurrency(defaultValue)
        updateRawNumber(defaultValue)
        updateText(currency)
    }, [defaultValue])


    
    /* ------------------- FUNCTIONS ------------------- */

    const alignment = props.onlyTwoCells ? {textAlign: "center"} : {}

    const useStyles = makeStyles({
        cell: {
            backgroundColor: rowColor,
            ...textSize,
            // ...alignment
        },
        input: { 
            backgroundColor: rowColor, 
            border: "0px",
            ...textSize,
            ...alignment

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
        !userMadeChanges && toggleChanges(true)
        updateBudget(tick + 1)
        setFocus(false)
        return false
    }


    return (
        <TableCell className={classes.cell}>
            <form 
                onSubmit={(e) => submit(e)} 
                style={{backgroundColor: rowColor}}
            >
                <input 
                    onChange={(e) => filterNumbers(e, updateRawNumber)}
                    className={`${classes.input} editable-cell income`}
                    value={focused ? rawNumber : newText}  
                    onSelect={(e) => setFocus(true)}
                    onBlur={(e) => submit(e)}
                    name="text-input"
                    type="text" 
                >
                </input>
            </form>
        </TableCell>
    )
}

export default IncomeNumberCell