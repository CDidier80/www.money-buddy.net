import { DialogTitle, makeStyles } from '@material-ui/core'
import React from 'react'


const PopupHeader = () => {

    const useStyles = makeStyles({

        header: {
            fontFamily: "Lato, sans-serif",
            padding: "20 20 0 20px",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "20px",
            color: "#22c1c3",
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
