import React, { useState, forwardRef } from 'react'
import { 
    Button,
    makeStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,

} from '@material-ui/core'

const useStyles = makeStyles({
    dialog: {
        minWidth: "280px",
        width: "33vw"
    },
    header: {
        fontFamily: "Lato, sans-serif",
        padding: "20 20 0 20px",
        textAlign: "center",
        fontWeight: "700",
        fontSize: "20px",
        color: "#22c1c3",
    },
    iconButtons: {
        marginTop: 0,
        paddingTop: 0
    },
    buttonWrapper: {
        margin: "0 auto",
        textAlign: "center",
        justifyContent: "center"
    },
    button: {
        fontFamily: "Lato, sans-serif",
        fontWeight: "700",
        fontSize: "13px",
        color: "#e6a824",
        "&:hover" : {
            backgroundColor: "#06fbff4b"
        }
    },
    span: {
        // paddingLeft: "5px",

    }
})


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})


const FlowcategoryDeletePopup = (props) => {

    const { 

    } = props

    const {
        tick,
        category,
        toggleChanges, 
        updateCashflow,
        userMadeChanges,
        newFlowcategories, 
        flowcategoryIndex,
        setNewFlowcategories, 
        toggleFlowcategoryDeletePopup,
    } = props

    const {name} = category


    /*  STATE  */


    const [open, setOpen] = useState(true)


    /*  FUNCTIONS  */

    const classes = useStyles()


    const confirm = (e) => {
        e.preventDefault()
        let flowcategoriesCopy = [...newFlowcategories]
        flowcategoriesCopy.splice(flowcategoryIndex, 1)
        setNewFlowcategories(flowcategoriesCopy)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        updateCashflow(tick + 1)
        toggleFlowcategoryDeletePopup(false)
    }


    const closePopup = (e) => {
        e.preventDefault()
        toggleFlowcategoryDeletePopup(false)
    }


    const handleDialogClick = e => {
        e.stopPropagation()
    }

    
    return (
            <Dialog
                disableBackdropClick={true}
                onClick={handleDialogClick}
                TransitionComponent={Transition}
                keepMounted
                open={open}	
                // onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <FlowcategoryPopupPrompt />
                <ConfirmCloseButtons />
            </Dialog>

    )
}

export default FlowcategoryDeletePopup