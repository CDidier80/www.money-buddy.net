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
        renderOutflowAccordion,
        rerenderOutflowAccordian,
        categoryIndex,
    } = props.fromOutflowAccordion

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
            let categoriesArrayCopy = [...newCategories]
            let outflowItem = categoriesArrayCopy[categoryIndex]['outflows'][outflowIndex]['amount']
            categoriesArrayCopy[categoryIndex]['outflows'].splice(outflowIndex, 1)
            setNewCategories(categoriesArrayCopy)
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
