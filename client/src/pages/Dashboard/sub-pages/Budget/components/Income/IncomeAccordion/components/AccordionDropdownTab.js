import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { 
    Typography, 
    AccordionSummary, 
    makeStyles 
} from '@material-ui/core/'



const AccordionDropdownTab = (props) => {

    const { expanded } = props


    const useStyles = makeStyles({
        summary: expanded ? 
        {
            transform: "translateX(-50%)",
            position: "relative",
            left: "50%",
        } : 
        {
            transform: "translate(-50%, -50%)",
            position: "relative",
            top: "7.5vh",
            left: "50%",
        },
        heading: {
            fontFamily: "Lato, sans-serif",
            fontWeight: "700",
            margin: "0 auto",
            fontSize: "30px",
            color: "#2c7b71",
            textShadow: `
            0 0 1px lightgray;
            `
        },
        expandMoreIcon : {
            color: "#2c7b71",
            paddingTop: "9px"
        }
    })
    
    const classes = useStyles()

    return (
        <AccordionSummary
            className={classes.summary}
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
                Income
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
