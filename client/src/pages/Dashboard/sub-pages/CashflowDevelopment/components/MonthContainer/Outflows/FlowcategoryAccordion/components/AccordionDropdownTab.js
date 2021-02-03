import React from 'react'
import FlowcategoryDeleteIcon from "./FlowcategoryDeleteIcon"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { 
    Typography, 
    AccordionSummary,
    makeStyles
} from '@material-ui/core';



const AccordionDropdownTab = (props) => {
    console.log("child rendered")

    const { 
        flowcategory,
        showDeleteIcons,
    } = props.fromOutflowsAccordion


    const useStyles = makeStyles({

        flexWrapper: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        },
        flowcategoryHeader: {
            color: "#e6a824",
            fontWeight: "500",
            fontFamily: "Lato, sans-serif",
            fontSize: "14px"
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
