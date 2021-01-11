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
        fontWeight: "700",
        fontSize: "20px",
        fontFamily: "Lato, sans-serif",
        color: "#22c1c3",
        padding: "20 20 0 20px",
        textAlign: "center"
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
        fontSize: "13px",
        fontWeight: "700",
        fontFamily: "Lato, sans-serif",
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






const CategoryDeletePopup = (props) => {

        const classes = useStyles()

    const { 
        setNewCategories, 
        newCategories, 
        toggleChanges, 
        userMadeChanges,
        updateBudget,
        tick
    } = props.fromBudget

    const { 
        category,
        categoryIndex
    } = props.fromExpenseAccordion

    const {name} = category

    const {toggleCategoryDeletePopup} = props.fromCategoryAccordion


    const [open, setOpen] = useState(true)

    const confirm = (e) => {
        e.preventDefault()
        let categoriesArrayCopy = newCategories
        categoriesArrayCopy.splice(categoryIndex, 1)
        setNewCategories(categoriesArrayCopy)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        updateBudget(tick + 1)
        toggleCategoryDeletePopup(false)
    }

    const closePopup = (e) => {
        e.preventDefault()
        toggleCategoryDeletePopup(false)
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
                <DialogContent className={classes.dialog}>
                    <DialogTitle 
                        id="alert-dialog-slide-title"
                        disableTypography={true}
                        className={classes.header}
                    >
                        Delete "
                            <span 
                                className={classes.span}
                            >
                                {name}
                            </span>
                            "?
                    </DialogTitle>
                    <DialogActions className={classes.buttonWrapper}>
                        <Button 
                            onClick={(e) => confirm(e)} 
                            color="primary"
                            className={classes.button}
                        >
                            Confirm
                        </Button>
                        <Button 
                            onClick={(e) => closePopup(e)} 
                            color="primary"
                            className={classes.button}
                        >
                            Back
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

    )
}

export default CategoryDeletePopup