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
            padding: "20px 0 0 13px",
            fontSize: "30px",
            fontFamily: "Lato, sans-serif",
            color: "#e6a824",
            textShadow: `
                0 0 1px lightgray;
            `
        },
        expandMoreIcon : {
            color:"#e6a824",
            paddingTop: "31px"
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
            <Typography 
                className={classes.heading}
            >
                Outflows
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
