import { 
    Typography,
    AccordionSummary,
} from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useInflowsDropdownStyles } from "../../../styles/styles"

const AccordionDropdownTab = props => {

    const {heading, expandMoreIcon} = useInflowsDropdownStyles(props.theme)
    
    return (
        <AccordionSummary
            expandIcon={
                <ExpandMoreIcon 
                    className={expandMoreIcon}
                />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography 
                className={heading}
            >
                Inflows
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
