import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { IconButton, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    iconButton: {
        marginRight: "11px",
        "&:hover" : {
            backgroundColor: "#ffcece65"
        }
    },
    deleteIcon: {
        color: "red",
    }
})

const FlowcategoryDeleteIcon = (props) => {

    const {
        toggleFlowcategoryDeletePopup,
        showFlowcategoryDeletePopup
    } =  props.fromFlowcategoryAccordion
    
    const classes = useStyles()

    const handleDeleteIcon = (e) => {
        e.preventDefault()
        toggleFlowcategoryDeletePopup(!showFlowcategoryDeletePopup)
    }

    return (
        <IconButton
            className={classes.iconButton}
            onClick={(e) => handleDeleteIcon(e)}
        >
            <HighlightOffIcon 
                className={classes.deleteIcon} 
                fontSize="small"
            />
        </IconButton>
    )
}

export default FlowcategoryDeleteIcon
