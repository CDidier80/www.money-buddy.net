import { 
    Typography,
    AccordionSummary,
} from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useSummaryDropdownStyles } from "../../styles/styles"




const AccordionDropdownTab = props => {

    const classes = useSummaryDropdownStyles(props.theme)

    return (
        <AccordionSummary
            expandIcon={
                <ExpandMoreIcon 
                    className={classes.expandMoreIcon}
                />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography 
                className={classes.heading}
            >
                {props.month}
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
