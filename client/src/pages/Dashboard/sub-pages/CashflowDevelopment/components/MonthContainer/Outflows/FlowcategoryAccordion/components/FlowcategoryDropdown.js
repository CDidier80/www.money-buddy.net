import { 
    Typography, 
    AccordionSummary,
} from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FlowcategoryDeleteIcon from "./FlowcategoryDeleteIcon"
import { useFlowcategoryDropdownStyles } from "../../../styles/styles"


const FlowcategoryDropdown = (props) => {

    const { 
        flowcategory,
        showDeleteIcons,
    } = props.fromOutflowsAccordion

    const classes = useFlowcategoryDropdownStyles(props.theme)

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
            {showDeleteIcons && <FlowcategoryDeleteIcon { ...props } /> }
            
            <div className={classes.flexWrapper}>
                <Typography 
                    className={classes.flowcategoryHeader}
                >
                    {flowcategory.name}
                </Typography>
            </div>
        </AccordionSummary>
    )
}

export default FlowcategoryDropdown
