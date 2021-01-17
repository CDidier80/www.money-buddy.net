import React from 'react'
import DelButton from "./DelButton"
import AddButton from "./AddButton"
import { 
    AccordionDetails, 
    ButtonGroup,
} from '@material-ui/core/'

const AddDelButtonGroup = (props) => {

    return (
        <AccordionDetails>
            <ButtonGroup 
                variant="text" 
                color="primary" 
                aria-label="text primary button group"
            >
                <AddButton {...props} />
                <DelButton  {...props} />
            </ButtonGroup>
        </AccordionDetails>
    )
}

export default AddDelButtonGroup
