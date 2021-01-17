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
        toggleChanges,
        userMadeChanges,
    } = props.fromCashflow

    const { 
        newFlowcategories,
        setNewFlowcategories

    } = props.fromMonthContainer


    const { 
        flowcategoryIndex: fci, 
    } = props.fromOutflowsAccordion



    const {
        lengthOfOutflows,
        setOuflowsLength,
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


    const addOutflow = (e) => {
        e.preventDefault() 
        const newLength = lengthOfOutflows + 1
        const defaultOutflow = {outflow: `outflow #${newLength}`, amount:0}
        let flowcategoriesCopy = [...newFlowcategories]
        flowcategoriesCopy[fci]["outflows"].unshift(defaultOutflow)
        setNewFlowcategories(flowcategoriesCopy)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        setOuflowsLength(newLength)
    }


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
                    onClick={(e) => addOutflow(e)}
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
