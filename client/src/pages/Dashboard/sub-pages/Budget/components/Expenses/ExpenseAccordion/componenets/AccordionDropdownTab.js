import React, {useState, useLayoutEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { 
    makeStyles,
    AccordionSummary,
    Typography,
} from '@material-ui/core';


const AccordionDropdownTab = (props) => {

    const { expanded } = props


    const useStyles = makeStyles({
        summary: expanded ? 
            {
                position: "relative",
                left: "50%",
                transform: "translateX(-50%)",
            } : 
            {
                position: "relative",
                top: "7.5vh",
                left: "50%",
                transform: "translate(-50%, -50%)",
            },
        header: {
            fontWeight: "700",
            margin: "0 auto",
            fontSize: "30px",
            fontFamily: "Lato, sans-serif",
            color: "#d29000",
            textShadow: `
                0 0 1px lightgray;
            `
        },
        expandMoreIcon : {
            color:"#d29000",
            paddingTop: "9px",
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
                className={classes.header}
            >
                Expenses
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
