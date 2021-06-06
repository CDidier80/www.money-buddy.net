import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CategoryDeleteIcon from "./CategoryDeleteIcon"
import React from 'react'
import { 
    makeStyles,
    Typography, 
    AccordionSummary,
} from '@material-ui/core'

const AccordionDropdownTab = props => {

    const { 
        category,
        showDeleteIcons,
    } = props.fromExpenseAccordion


    const useStyles = makeStyles(theme => {


        const { secondaryDark } = theme.palette
        
        return ({
            flexWrapper: {
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
            },
            category: {
                color: secondaryDark.main,
                fontWeight: "500",
                ...theme.lato
            },
            expandMoreIcon : {
                color: secondaryDark.main,
            }
        })
    })

    const classes = useStyles(props.theme)



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

        {showDeleteIcons &&
            <CategoryDeleteIcon 
                { ...props }
            />
        }
        
        <div className={classes.flexWrapper}>
            <Typography 
                className={classes.category}
            >
                {category.name}
            </Typography>
        </div>
    </AccordionSummary>
    )
}

export default AccordionDropdownTab
