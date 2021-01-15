import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { 
    Typography, 
    AccordionSummary, 
    makeStyles 
} from '@material-ui/core'



const AccordionDropdownTab = (props) => {

    const useStyles = makeStyles({
        heading: {
            fontWeight: "700",
            margin: "0 auto",
            fontSize: "13px",
            fontFamily: "Lato, sans-serif",
            color: "#22c1c3",
            textShadow: `
                0 0 1px lightgray;
            `
        },
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
                Income
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
