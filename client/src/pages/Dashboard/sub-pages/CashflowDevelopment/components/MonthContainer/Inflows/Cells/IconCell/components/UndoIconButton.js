import { 
    IconButton, 
    makeStyles, 
} from '@material-ui/core'
import React from 'react'
import UndoIcon from '@material-ui/icons/Undo';


const UndoIconButton = props => {

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
        >
            <UndoIcon 
                className={classes.undoIcon} 
                fontSize="small"
            />
        </IconButton>
    )
}

export default UndoIconButton
