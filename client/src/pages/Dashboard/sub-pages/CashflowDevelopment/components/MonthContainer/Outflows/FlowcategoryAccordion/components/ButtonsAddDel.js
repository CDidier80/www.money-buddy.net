import { 
    Button,
    makeStyles,
    ButtonGroup,
    AccordionDetails,
} from '@material-ui/core'
import React from 'react'



const ButtonsAddDel = props => {

    /* -------------------------- PROPS ------------------------- */

    const {
        showOutflowDeleteIcons,
        toggleOutflowDeleteIcons,
    } = props.fromFlowcategoryAccordion
    
    const { flowcategoryIndex: fci, } = props.fromOutflowsAccordion

    /* --------- FUNCTIONS ---------*/

    const useStyles = makeStyles({
        button: {
            fontFamily: "Lato, sans-serif",
            padding: "0 5px 0 5px",
            fontWeight: "700",
            color: "#e6a824",
            fontSize: "9px",
        },
        deleteButton: {
            color: showOutflowDeleteIcons ? "#22c1c3" : "#e6a824",
            fontFamily: "Lato, sans-serif",
            padding: "0 5px 0 5px",
            fontWeight: "700",
            fontSize: "9px",
        },
    })


    const classes = useStyles()


    const handleOutflowDeleteIcons = (e) => {
        e.preventDefault()
        toggleOutflowDeleteIcons(!showOutflowDeleteIcons)
    }


    return (
        <AccordionDetails>
            <ButtonGroup 
                variant="text" 
                color="primary" 
                className={classes.buttonGroup} 
                aria-label="text primary button group"
            >
                <Button className={classes.button} > Add Outflow </Button>
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
