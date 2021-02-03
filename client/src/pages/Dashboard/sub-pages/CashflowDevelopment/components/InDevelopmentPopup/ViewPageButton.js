import React from 'react'
import { DialogActions, makeStyles, Button } from '@material-ui/core'

const ViewPageButton = ({toggleShowPopup}) => {

    const useStyles = makeStyles({
        buttonWrapper: {
            margin: "0 auto",
            textAlign: "center",
            justifyContent: "center"
        },
        button: {
            fontSize: "13px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: "#e6a824",
            "&:hover" : {
                backgroundColor: "#06fbff4b"
            }
        },
    })

    const classes = useStyles()

    const closePopup = (e) => {
        e.preventDefault()
        toggleShowPopup(false)
    }

    return (
        <DialogActions 
            className={classes.buttonWrapper}
        >
            <Button 
                onClick={(e) => closePopup(e)} 
                className={classes.button}
                color="primary"
            >
                View Page
            </Button>
        </DialogActions>
    )
}

export default ViewPageButton
