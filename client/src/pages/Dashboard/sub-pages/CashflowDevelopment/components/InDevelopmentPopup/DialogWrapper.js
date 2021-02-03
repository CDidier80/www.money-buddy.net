import { 
    Dialog, 
    Slide, 
    makeStyles,
    DialogContent, 
    useMediaQuery, 
} from '@material-ui/core'
import React, { forwardRef } from 'react'


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})


const DialogWrapper = (props) => {

    const smallStyle = useMediaQuery("(max-width: 400px)", {noSsr: true})
    const style = smallStyle ? {fontSize: "12px", top: "30vh"} : {}

    const useStyles = makeStyles({
        dialog: {
            minWidth: "200px",
            backgroundColor: "white",
            ...style
        },
    })

    const classes = useStyles()

    const handleDialogClick = e => {
        e.stopPropagation()

    }

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
                className={classes.dialog}
                dividers={true}
            >
                {props.children}
            </DialogContent>
        </Dialog>
    )
}

export default DialogWrapper
