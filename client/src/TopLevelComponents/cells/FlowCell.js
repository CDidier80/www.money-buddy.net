import { useFlowNumberCellStyles, useFlowSourceCellStyles } from "./useCellStyles"
import { filterNumbers, currencyFormat } from "../../modules/clientFunctions"
import React, { useState, useEffect } from 'react'
import { TableCell } from '@material-ui/core'


const FlowCell = (props) => {

    /* -------------------- PROPS -------------------- */

    const { 
        defaultValue,
        numberCell,
        rowColor,
        onSubmit,
        align,
    } = props


    /* -------------------- STATE -------------------- */

    const [ rawNumber, updateRawNumber] = useState(0)
    const [ newText, updateText ] = useState("")
    const [ focused, setFocus ] = useState(false)
    

    /* ------------------- useEffect ------------------- */

    useEffect(() => {
        if(numberCell) {
            const currency = currencyFormat(defaultValue)
            updateRawNumber(defaultValue)
            updateText(currency)
        } else {
            updateText(defaultValue)
        }
    }, [defaultValue])


    /* ------------------- FUNCTIONS ------------------- */

    const handleText = (e) => {
        const { value } = e.target
        updateText(value)
    }

    /* ------------------- STYLES ------------------- */

    const numberClasses = useFlowNumberCellStyles(rowColor)
    const sourceClasses = useFlowSourceCellStyles(rowColor)
    const classes = numberCell ? numberClasses : sourceClasses

    
    return (
        <TableCell className={classes.cell}>
            <form 
                onSubmit={(e) => onSubmit(e)} 
                style={{backgroundColor: rowColor}}
            >
                <input 
                    onChange={
                        numberCell ?
                            (e) => filterNumbers(e, updateRawNumber) :
                            (e) => handleText(e)
                    }
                    value={
                        numberCell ? 
                        (focused ? rawNumber : newText) : 
                        newText
                    }  
                    onSelect={(e) => setFocus(true)}
                    onBlur={(e) => onSubmit(e)}
                    className={classes.input}
                    align={align || "right"}
                    name="text-input"
                    type="text" 
                >
                </input>
            </form>
        </TableCell>
    )
}

export default FlowCell
