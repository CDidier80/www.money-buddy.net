import { DialogTitle, makeStyles } from '@material-ui/core'
import React from 'react'


const PopupHeader = () => {

    const useStyles = makeStyles({

        header: {
            fontWeight: "700",
            fontSize: "20px",
            fontFamily: "Lato, sans-serif",
            color: "#22c1c3",
            padding: "20 20 0 20px",
            textAlign: "center"
        }
    })
    
    const classes = useStyles()

    return (
        <DialogTitle 
            id="alert-dialog-slide-title"
            className={classes.header}
            disableTypography={true}
        > 
            A quick note...
        </DialogTitle>
    )
}

export default PopupHeader
