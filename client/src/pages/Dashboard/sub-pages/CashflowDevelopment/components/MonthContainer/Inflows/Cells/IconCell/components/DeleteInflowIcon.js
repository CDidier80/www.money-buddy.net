import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { 
    IconButton,
    Fade,
    makeStyles
} from '@material-ui/core'

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
    },
})


const DeleteInflowIcon = (props) => {

    
    {/* ------------ Deconstruct Props -----------*/}

    const {
        rowIndex,
    } = props.fromInflowTable

    {/* ------------ Functions -----------*/}
    const classes = useStyles()

    return (
        <Fade in={true}>
            <IconButton
                className={classes.iconButton}
                id={rowIndex}
            >
                <HighlightOffIcon 
                    className={classes.deleteIcon} 
                    fontSize="small"
                />
            </IconButton>
        </Fade>
    )
}

export default DeleteInflowIcon
