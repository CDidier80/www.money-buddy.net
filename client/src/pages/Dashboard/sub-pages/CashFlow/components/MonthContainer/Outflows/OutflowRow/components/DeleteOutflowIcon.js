import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { makeStyles, IconButton, } from '@material-ui/core'

const DeleteOutflowIcon = (props) => {


    const {
        newCategories,
        setNewCategories, 
        updateCashflow, 
        tick
    } = props.fromCashflow

    const { 
        renderExpAccordion,
        rerenderOutflowAccordian,
        categoryIndex,
    } = props.fromOutflowAccordion

    const { outflowIndex, } = props.fromOutflowTable


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
            let categoriesArrayCopy = newCategories
            let outflowItem = categoriesArrayCopy[categoryIndex]['expenses'][outflowIndex]['amount']
            categoriesArrayCopy[categoryIndex]['expenses'].splice(outflowIndex, 1)
            setNewCategories(categoriesArrayCopy)
            // full budget rerender only necessary if expense is not $0
            if (outflowItem === 0) {
                rerenderOutflowAccordian(!renderExpAccordion)
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
