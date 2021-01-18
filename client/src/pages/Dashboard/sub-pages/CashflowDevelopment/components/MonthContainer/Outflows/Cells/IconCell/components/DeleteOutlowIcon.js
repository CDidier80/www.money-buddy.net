import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { makeStyles, IconButton, } from '@material-ui/core'

const DeleteOutflowIcon = (props) => {


    const {
        updateCashflow, 
        tick,
    } = props.fromCashflowDevelopment

    const {
        newFlowcategories,
        setNewFlowcategories, 
    } = props.fromMonthContainer

    const { 
        renderOutflowAccordion,
        rerenderOutflowAccordian,
        flowcategoryIndex,
    } = props.fromOutflowsAccordion

    const { outflowIndex } = props.fromOutflowTable


    const useStyles = makeStyles({
        iconButton: {
            marginRight: "11px",
            "&:hover" : {
                backgroundColor: "#ffcece65"
            }
        },
        deleteIcon: {
            color: "red",
            fontSize: "13px"
        }
    })

    
    const classes = useStyles()

    const handleDeleteOutflow = (e) => {
        e.preventDefault()
        try {
            const outflowIndex = e.currentTarget.id
            let flowcategoriesCopy = [...newFlowcategories]
            let outflowItem = flowcategoriesCopy[flowcategoryIndex]['outflows'][outflowIndex]['amount']
            flowcategoriesCopy[flowcategoryIndex]['outflows'].splice(outflowIndex, 1)
            setNewFlowcategories(flowcategoriesCopy)
            if (outflowItem === 0) {
                rerenderOutflowAccordian(!renderOutflowAccordion)
            } else {
                updateCashflow(tick + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <IconButton
            className={classes.iconButton}
            onClick={(e) => handleDeleteOutflow(e)}
            id={outflowIndex}
        >
            <HighlightOffIcon 
                className={classes.deleteIcon} 
                fontSize="small"
            />
        </IconButton>
    )
}

export default DeleteOutflowIcon
