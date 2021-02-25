import { 
    makeStyles,
    Typography, 
    AccordionSummary,
} from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FlowcategoryDeleteIcon from "./FlowcategoryDeleteIcon"


const AccordionDropdownTab = (props) => {

    const { 
        flowcategory,
        showDeleteIcons,
    } = props.fromOutflowsAccordion


    const useStyles = makeStyles({

        flexWrapper: {
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
        },
        flowcategoryHeader: {
            fontFamily: "Lato, sans-serif",
            fontWeight: "500",
            fontSize: "14px",
            color: "#e6a824",
        },
        expandMoreIcon : {
            color: "#e6a824",
            fontSize: "18px",
            paddingLeft: "0"
        }
    })

    const classes = useStyles()

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
            {showDeleteIcons &&
                <FlowcategoryDeleteIcon 
                    {...props}
                />
            }
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

export default AccordionDropdownTab
