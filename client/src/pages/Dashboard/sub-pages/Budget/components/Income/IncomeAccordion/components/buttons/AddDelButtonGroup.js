import { 
    makeStyles,
    ButtonGroup,
    AccordionDetails, 
} from '@material-ui/core/'
import React from 'react'
import DelButton from "./DelButton"
import AddButton from "./AddButton"

const AddDelButtonGroup = (props) => {

    const useStyles = makeStyles({
        buttonGroup: {
            maxWidth: "890px",
            margin: "auto"
        },
    })

    const classes = useStyles()

    return (
        <AccordionDetails className={classes.buttonGroup}>
            <ButtonGroup 
                variant="text" 
                color="primary" 
                aria-label="button group"
            >
                <AddButton {...props} />
                <DelButton {...props} />
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default AddDelButtonGroup
