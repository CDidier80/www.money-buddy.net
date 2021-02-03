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
            paddingLeft: "27px",
            fontSize: "18px",
            fontFamily: "Lato, sans-serif",
            color: "black",
            textShadow: `
                0 0 1px lightgray;
            `
        },
        expandMoreIcon : {
            color:"#22c1c3",
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
            <Typography 
                className={classes.heading}
            >
                {props.month}
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
