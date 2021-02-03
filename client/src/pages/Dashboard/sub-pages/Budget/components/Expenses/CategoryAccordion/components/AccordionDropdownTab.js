import React from 'react'
import CategoryDeleteIcon from "./CategoryDeleteIcon"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { 
    Typography, 
    AccordionSummary,
    makeStyles
} from '@material-ui/core';



const AccordionDropdownTab = (props) => {

    const { 
        category,
        showDeleteIcons,
    } = props.fromExpenseAccordion


    const useStyles = makeStyles({

        flexWrapper: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        },
        category: {
            color: "#d29000",
            fontWeight: "500",
            fontFamily: "Lato, sans-serif",
        },
        expandMoreIcon : {
            color:"#d29000",
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

        {showDeleteIcons &&
            <CategoryDeleteIcon 
                {...props}
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
