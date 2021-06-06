import { Dialog } from "@material-ui/core"
import Transition from '../Transition'
import React from 'react'

const DialogWrapper = props => {

    const { children, onClick, open } = props
    return (
        <Dialog
            keepMounted
            open={open}	
            onClick={onClick}
            disableBackdropClick={true}
            TransitionComponent={Transition}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            { children }
        </Dialog>
    )
}

export default DialogWrapper
