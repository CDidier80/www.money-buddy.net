import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react'

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

const CategoryDeleteIcon = props => {

    const {
        toggleCategoryDeletePopup,
        showCategoryDeletePopup
    } =  props.fromCategoryAccordion
    
    const classes = useStyles()

    const handleDeleteIcon = (e) => {
        e.preventDefault()
        toggleCategoryDeletePopup(!showCategoryDeletePopup)
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

export default CategoryDeleteIcon
