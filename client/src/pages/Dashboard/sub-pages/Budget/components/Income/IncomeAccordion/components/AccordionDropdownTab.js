import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { 
    Typography, 
    AccordionSummary, 
    makeStyles ,
    withTheme
} from '@material-ui/core/'



const AccordionDropdownTab = (props) => {

    console.log(props)

    const { expanded, theme } = props


    const useStyles = makeStyles(theme => {


        const { main } = theme.palette.primaryDark
        
        return ({
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
                ...theme.lato,
                fontWeight: "700",
                margin: "0 auto",
                fontSize: "30px",
                color: main,
                textShadow: `
                    0 0 1px lightgray;
                `
            },
            expandMoreIcon : {
                color: main,
                paddingTop: "9px"
            }
    })})
    
    const classes = useStyles(theme)

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

export default withTheme(AccordionDropdownTab)
