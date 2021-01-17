import { TableCell } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'


const InflowTextCell = (props) => {

    {/*  PROPS  */}

    const {
        updateCashflow, 
        tick,
        userMadeChanges, 
        toggleChanges, 
    } = props.fromCashflow


    const {
        defaultValue,
    } = props.fromOutflowRow

    const {
        setNewFlowcategories,
        newFlowcategories,
    } = props.fromMonthContainer


    const {
        flowcategoryIndex
    } = props.fromOutflowsAccordion

    const {
        flowcategory,
        rowIndex, 
        rowColor,
    } = props.fromOutflowsTable


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
    

    const updateNewFlowcategories = (value) => {
        let flowcategoriesCopy = [...newFlowcategories]
        let thisFlowcategoryCopy = {...flowcategory}
        thisFlowcategoryCopy["outflow"][rowIndex]['outflow'] = value
        flowcategoriesCopy[flowcategoryIndex] = thisFlowcategoryCopy
        setNewFlowcategories(flowcategoriesCopy)
        updateCashflow(tick + 1)
    }


    const handleText = (e) => {
        const { value } = e.target
        updateText(value)
    }

    const submit = (e) => {
        e.preventDefault()
        document.activeElement.blur()
        updateNewFlowcategories(newText)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        updateCashflow(tick + 1)
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


