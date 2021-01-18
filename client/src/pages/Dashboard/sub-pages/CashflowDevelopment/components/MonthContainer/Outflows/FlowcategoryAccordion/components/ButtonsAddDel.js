import React from 'react'
import { 
    Button,
    ButtonGroup,
    AccordionDetails,
    makeStyles
} from '@material-ui/core'



const ButtonsAddDel = (props) => {

    /* -------------------------- PROPS ------------------------- */


    const { 
        flowcategoryIndex: fci, 
    } = props.fromOutflowsAccordion



    const {

        toggleOutflowDeleteIcons,
        showOutflowDeleteIcons
    } = props.fromFlowcategoryAccordion


    {/* FUNCTIONS */}

    const useStyles = makeStyles({
        button: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: "#e6a824",
            padding: "0 5px 0 5px"
        },
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showOutflowDeleteIcons ? "#22c1c3" : "#e6a824",
            padding: "0 5px 0 5px"
        },
    })


    const classes = useStyles()



    const handleOutflowDeleteIcons = (e) => {
        e.preventDefault()
        toggleOutflowDeleteIcons(!showOutflowDeleteIcons)
    }


    return (
        <AccordionDetails>
            <ButtonGroup className={classes.buttonGroup} 
                variant="text" 
                color="primary" 
                aria-label="text primary button group"
            >
                <Button 
                    className={classes.button}
                >
                    Add Outflow
                </Button>
                <Button 
                    className={classes.deleteButton}
                    onClick={(e) => handleOutflowDeleteIcons(e)}
                >
                    {showOutflowDeleteIcons ? "Cancel Delete" : "Delete Outflow"}
                </Button>
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default ButtonsAddDel
