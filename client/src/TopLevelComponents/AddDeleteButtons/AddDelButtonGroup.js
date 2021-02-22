import { 
    ButtonGroup,
    AccordionDetails, 
} from '@material-ui/core/'
import React from 'react'
import DelButton from "./DelButton"
import AddButton from "./AddButton"
import { usePrimaryStyles, useSecondaryStyles } from "./styles"


const AddDelButtonGroup = (props) => {


    const primaryClasses = usePrimaryStyles(props)
    const secondaryClasses = useSecondaryStyles(props)
    const classes = props.variant === "secondary" ? 
        secondaryClasses : 
        primaryClasses


    let padding = {}
    let fontSize = "9px"

    if (props.fromIncomeAccordion.smallerButtons) {
        // padding = { padding: "8px 16px 8px 16px" }
        fontSize = "8px"
    }

    const buttonStyles = {
        fontSize: fontSize,
        ...padding,
    }

    return (
        <AccordionDetails className={classes.buttonGroup}>
            <ButtonGroup 
                aria-label="button group"
                color="primary" 
                variant="text" 
            >
                <AddButton 
                    addButton={classes.addButton}
                    buttonStyles={buttonStyles}
                    {...props} 
                />
                <DelButton 
                    buttonStyles={buttonStyles}
                    classes={classes}
                    {...props} 
                />
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default AddDelButtonGroup



