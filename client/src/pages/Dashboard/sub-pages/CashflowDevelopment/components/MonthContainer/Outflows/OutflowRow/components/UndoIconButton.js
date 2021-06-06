import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'



const UndoIcon = props => {

    const useStyles = makeStyles({
        undoIcon: {
            color: "lightgray",
        },
        iconButton: {
            marginRight: "11px",
            "&:hover" : {
                backgroundColor: "#ffcece65"
            }
        },
    })

    const classes = useStyles()



    return (
        <IconButton
            className={classes.iconButton}
            onClick={(e) => restoreLastValue(e)}
        >
            <UndoIcon 
                className={classes.undoIcon} 
                fontSize="small"
            />
        </IconButton>
    )
}

export default UndoIcon
