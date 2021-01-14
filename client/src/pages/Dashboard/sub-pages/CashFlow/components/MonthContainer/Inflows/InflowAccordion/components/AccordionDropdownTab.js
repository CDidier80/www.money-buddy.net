import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { 
    makeStyles,
    AccordionSummary,
    Typography,
} from '@material-ui/core';



const AccordionDropdownTab = (props) => {

    const useStyles = makeStyles({
        heading: {
            fontWeight: "700",
            margin: "0 auto",
            // padding: "20px 0 0 13px",
            fontSize: "13px",
            fontFamily: "Lato, sans-serif",
            color: "#22c1c3",
            textShadow: `
                0 0 1px lightgray;
            `
        },
        expandMoreIcon : {
            color:"#22c1c3",
            // paddingTop: "31px"
        }
    })

    const classes = useStyles()
    const expandIconStyle = {color:"#22c1c3", paddingTop: "31px"}
    
    return (
        <AccordionSummary
            expandIcon={
                <ExpandMoreIcon 
                    style={expandIconStyle}
                />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography 
                className={classes.heading}
            >
                Inflows
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
