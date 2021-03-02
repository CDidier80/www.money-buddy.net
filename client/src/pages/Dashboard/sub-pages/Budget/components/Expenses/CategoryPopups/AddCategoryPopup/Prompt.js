import { DialogTitle } from "@material-ui/core"
import React from 'react'

const Prompt = ({classes}) => {
    return (
        <DialogTitle 
            id="alert-dialog-slide-title"
            disableTypography={true}
            className={classes.header}
        >
            Name your new category:
        </DialogTitle>
    )
}

export default Prompt
