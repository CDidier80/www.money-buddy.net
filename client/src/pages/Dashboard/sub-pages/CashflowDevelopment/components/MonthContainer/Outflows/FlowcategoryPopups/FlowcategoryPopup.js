import React, { useState, forwardRef } from 'react'
import { 
    Button,
    makeStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    TextField,
    createMuiTheme,
    MuiThemeProvider,
    withStyles
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
    },
    iconButtons: {
        marginTop: 0,
        paddingTop: 0
    },
    button: {
        fontSize: "12px",
        fontWeight: "700",
        fontFamily: "Lato, sans-serif",
        color: "#e6a824",
    }
})


const CssTextField = withStyles({
    root: {

        '& label': {
            color: 'gray',
            fontFamily: "Lato,sans-serif",
            fontSize: "15px"
        },
        '& label.Mui-focused': {
            color: '#e6a824',
            fontFamily: "Lato,sans-serif",
        },
        '& error': {
            borderBottomColor: 'red',
            
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#e6a824',            
            '& Mui-error': {
                borderBottomColor:"blue"
            }

        },
        '& .MuiInput-underline Mui-error:after': {
            borderBottomColor: 'green',
        },

    },
    
})(TextField);


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} { ...props } />;
})



const FlowcategoryPopup = (props) => {
    
    {/*  PROPS */}

    const { toggleAddflowcategoryPanel } = props
    const { 
        toggleChanges, 
        userMadeChanges 
    } = props.fromBudget

    const {
        setNewFlowcategories, 
        newFlowcategories, 
    } = props.fromMonthContainer

    const [open, setOpen] = useState(true)
    const [text, setText] = useState("")


    {/*  FUNCTIONS  */}

    const [error, setError] = useState(false)



     {/*  FUNCTIONS  */}
    
    const classes = useStyles()


    const updateText = (e) => {
        const {value} = e.target
        if (value.length < 40) {
            setText(value)
        }
        if (error){
            setError(false)
        }
        
    }


    const confirm = (e) => {
        e.preventDefault()
        let flowcategoriesCopy = [...newFlowcategories]
        let duplicates = false
        newFlowcategories.forEach(flowcategory => {
            if(text === flowcategory.name){
                console.log(flowcategory.name)

                setError(true)
                duplicates = true
            }
            console.log(error)
            return
        })
        console.log("still running")
        if (duplicates) return
        let newFlowflowcategory = {name: text, expenses: []}
        flowcategoriesCopy.push(newFlowflowcategory)
        setNewFlowcategories(flowcategoriesCopy)
        toggleAddflowcategoryPanel(false)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
    }


    const closePopup = (e) => {
        e.preventDefault()
        toggleAddflowcategoryPanel(false)
    }


    const handleDialogClick = e => {
        e.stopPropagation()
    }


    {/*  VARIABLES  */}
    const labelOne = "flowcategory name"
    const labelTwo = `This flowcategory already exists`


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
                    Name your new flowcategory:
                </DialogTitle>

                <DialogContent>
                    <form onSubmit={(e) => confirm(e)}>
                    <CssTextField
                        autoFocus
                        margin="dense"
                        id="flowcategory-name"
                        label={(error ? "Error" : labelOne)}
                        error={error}
                        // type="email"
                        fullWidth
                        onChange={(e)=>updateText(e)}
                        helperText={labelTwo}
                    />

                    </form>
                </DialogContent>
                <DialogActions>
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

export default FlowcategoryPopup