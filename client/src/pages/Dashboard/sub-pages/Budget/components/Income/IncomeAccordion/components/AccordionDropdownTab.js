import { 
    withTheme,
    Typography, 
    AccordionSummary, 
} from '@material-ui/core/'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useDropdownStyles } from '../useDropdownStyles'



const AccordionDropdownTab = (props) => {

    const { expanded, theme } = props

    const classes = useDropdownStyles(theme, expanded)

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
