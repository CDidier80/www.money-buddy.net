import { 
    Slide, 
    Dialog, 
    DialogContent, 
} from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useDialogWrapperStyles } from "./modalStyles"


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} { ...props } />;
})


const DialogWrapper = ({children, theme}) => {

    const { dialog } = useDialogWrapperStyles(theme)

    const handleDialogClick = e => e.stopPropagation()
    
    return (
        <Dialog
            open={true}	
            keepMounted
            disableBackdropClick={true}
            onClick={handleDialogClick}
            TransitionComponent={Transition}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogContent 
                className={dialog}
                dividers={true}
            >
                { children } 
            </DialogContent>
        </Dialog>
    )
}

export default DialogWrapper
