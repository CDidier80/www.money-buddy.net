import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { makeStyles, IconButton, } from '@material-ui/core'

const DeleteOutflowIcon = (props) => {


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


    return (
        <IconButton
            className={classes.iconButton}
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
