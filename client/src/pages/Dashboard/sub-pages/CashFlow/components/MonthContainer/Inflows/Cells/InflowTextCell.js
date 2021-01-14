import { TableCell } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'

const InflowTextCell = (props) => {

    {/*  PROPS  */}

    // const { 
    //     setNewInflows, 
    //     newInflows, 
    //     toggleChanges, 
    //     userMadeChanges,
    //     tick,
    //     updateBudget,
    // } = props.fromBudget

    // const { arrayIndex, rowColor } = props.fromIncomeTable

    // const {
    //     defaultValue,
    // } = props.fromIncomeRow


    {/*  STATE  */}

    const [ newText, updateText ] = useState("")
    const [ focused, setFocus ] = useState(false)


    {/* FUNCTIONS */}

    useEffect(() => {
        updateText(defaultValue)
    }, [defaultValue])


    const useStyles = makeStyles({
        cell: {
            backgroundColor: rowColor
        }
    })

    const classes = useStyles()
    

    const updateNewInflows = (value) => {
        let replacementArray = [...newInflows]
        let incomeObject = newInflows[arrayIndex]
        incomeObject.source = value
        replacementArray[arrayIndex] = incomeObject
        setNewInflows(replacementArray)
    }


    const handleText = (e) => {
        const { value } = e.target
        updateText(value)
    }

    const submit = (e) => {
        e.preventDefault()
        document.activeElement.blur()
        updateNewInflows(newText)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        // updateBudget(tick + 1)
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

export default InflowTextCell


