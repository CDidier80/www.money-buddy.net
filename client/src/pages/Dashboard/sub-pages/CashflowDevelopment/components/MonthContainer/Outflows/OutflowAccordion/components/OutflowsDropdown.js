import { useOutflowsDropdownStyles } from "../../../styles/styles"
import { AccordionSummary, Typography, } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'




const OutflowsDropdown = (props) => {

    const classes = useOutflowsDropdownStyles(props.theme)

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
                Outflows
            </Typography>
        </AccordionSummary>
    )
}

export default OutflowsDropdown
