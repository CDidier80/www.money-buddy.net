import { 
    ButtonGroup,
    AccordionDetails, 
} from '@material-ui/core/'
import React from 'react'
import DelButton from "./DelButton"
import AddButton from "./AddButton"
import { useButtonStyles } from "./buttonStyles"


const AddDelButtonGroup = (props) => {


    const classes = useButtonStyles(props.theme, props)

    const propsAddButton = { addButton: classes.addButton, ...props, }

    const propsDelButton = { classes, ...props }

    const propsButtonGroup = {
        "aria-label": "button-group",
        color: "primary",
        variant: "text"
    }

    return (
        <AccordionDetails className={classes.buttonGroup}>
            <ButtonGroup {...propsButtonGroup}  >
                <AddButton {...propsAddButton} />
                <DelButton {...propsDelButton} />
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default AddDelButtonGroup



