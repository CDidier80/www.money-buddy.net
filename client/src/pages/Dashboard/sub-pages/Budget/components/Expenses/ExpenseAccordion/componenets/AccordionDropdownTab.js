import React, {useState, useLayoutEffect} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { 
    makeStyles,
    AccordionSummary,
    Typography,
} from '@material-ui/core';


const AccordionDropdownTab = (props) => {

    const { expanded, theme } = props


    const useStyles = makeStyles( theme => {
        
        const { secondaryDark } = theme.palette

        return ({
            summaryExpanded: {
                left: "50%",
                position: "relative",
                transform: "translateX(-50%)",
            }, 
            summaryClosed: {
                left: "50%",
                top: "7.5vh",
                position: "relative",
                transform: "translate(-50%, -50%)",
            },
            header: {
                ...theme.lato,
                margin: "0 auto",
                fontSize: "30px",
                fontWeight: "700",
                color: secondaryDark.main,
                textShadow: `0 0 1px lightgray`
            },
            expandMoreIcon : {
                color: secondaryDark.main,
                paddingTop: "9px",
            }
        })
})

    const classes = useStyles(theme)
    const { summaryExpanded, summaryClosed } = classes

    const currentClass = expanded ? summaryExpanded : summaryClosed

    return (
        <AccordionSummary
            className={currentClass}
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
