import { 
    makeStyles,
    Typography,
    AccordionSummary,
} from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const AccordionDropdownTab = (props) => {

    const useStyles = makeStyles({
        heading: {
            fontFamily: "Lato, sans-serif",
            paddingLeft: "27px",
            fontWeight: "700",
            margin: "0 auto",
            fontSize: "18px",
            color: "#22c1c3",
            textShadow: `
                0 0 1px lightgray;
            `
        },
        expandMoreIcon : {
            fontSize: "18px",
            color:"#22c1c3",
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
                Inflows
            </Typography>
        </AccordionSummary>
    )
}

export default AccordionDropdownTab
