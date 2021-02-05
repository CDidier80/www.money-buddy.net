import { 
    makeStyles, 
    Accordion, 
    useMediaQuery 
} from '@material-ui/core'
import React, { useState, useLayoutEffect } from 'react';
import AddDelButtonGroup from "./components/buttons/AddDelButtonGroup"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import IncomeTable from "../IncomeTable/IncomeTable"


const IncomeAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */
    
    const { gradientWrapper } = props.fromApp
    const { newIncomes } = props.fromBudget

    /* -------------------- init MEDIA QUERY -------------------- */

    const autoExpandHeight = useMediaQuery('(min-height:950px)', {noSsr: true})
    const smallerButtons = useMediaQuery('(max-width:600px)', {noSsr: true})

    
    /* -------------------------- STATE ------------------------- */
    
    const [showIncomeDeleteIcons, toggleIncomeDeleteIcons] = useState(false)
    const [lengthOfIncomes, setLengthOfIncomes] = useState(newIncomes.length)
    const [expanded, setExpanded] = useState(false)


    /* ------------------------ EFFECTS ----------------------- */

    useLayoutEffect(() => {
        if (autoExpandHeight && !expanded) {
            setExpanded(true)
        }
    }, [autoExpandHeight])

    
    /* -------------------------- FUNCTIONS ------------------------- */

    const handleExpansion = (e) => {
        setExpanded(!expanded)
    }


    /* -------------------------- STYLES ------------------------- */

    const useStyles = makeStyles({
        accordionWrapper: {
            padding: "6px",
            ...gradientWrapper,
            marginBottom: "20px",
            marginBottom: "20px",
            position: "relative"
        },
        accordion: {
            minHeight: "15vh",
            borderRadius: "3px",
            position: "relative"
        },
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            padding: "0 5px 0 5px",
            fontFamily: "Lato, sans-serif",
            color: showIncomeDeleteIcons ? "#e6a824" : "#2c7b71",
        }
    })
    
    const classes = useStyles()


    /* -------------------------- PROPS FOR CHILDREN------------------------- */

    const incomeTableProps = {
        toggleIncomeDeleteIcons,
        showIncomeDeleteIcons,
    }

    const addDelButtonGroupProps = {
        smallerButtons: smallerButtons,
        toggleIncomeDeleteIcons,
        showIncomeDeleteIcons,
        setLengthOfIncomes,
        lengthOfIncomes,
    }
    
    return (
        <div className={classes.accordionWrapper}>
            <Accordion 
                onChange={(e) => handleExpansion(e)}
                className={classes.accordion}
                expanded={expanded} 
            >
                <AccordionDropdownTab 
                    expanded={expanded}
                />
                <AddDelButtonGroup 
                    {...props}
                    fromIncomeAccordion={{...addDelButtonGroupProps}}
                />
                <IncomeTable 
                    {...props}
                    fromIncomeAccordion={{...incomeTableProps}}
                />
            </Accordion>
        </div>
    )
}

export default IncomeAccordion

