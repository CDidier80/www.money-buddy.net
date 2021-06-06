import { 
    makeStyles, 
    Accordion, 
    useMediaQuery 
} from '@material-ui/core'
import React, { useState, useLayoutEffect } from 'react';
import GradientWrapper from "../../../../../../../TopLevelComponents/GradientWrapper"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import AddDeleteButtons from "./components/AddDeleteButtons"
import IncomeTable from "../IncomeTable/IncomeTable"


const IncomeAccordion = (props) => {

    /* -------------------------- PROPS ------------------------- */
    
    const { newIncomes } = props.fromBudget

    /* -------------------- init MEDIA QUERY -------------------- */

    const autoExpandHeight = useMediaQuery('(min-height:950px)', {noSsr: true})
    const smallerButtons = useMediaQuery('(max-width:600px)', {noSsr: true})

    
    /* -------------------------- STATE ------------------------- */
    
    const [showIncomeDeleteIcons, toggleIncomeDeleteIcons] = useState(false)
    const [lengthOfIncomes, setLengthOfIncomes] = useState(newIncomes.length)
    const [expanded, setExpanded] = useState(false)


    /* ------------------------- EFFECTS ------------------------ */

    useLayoutEffect(() => {
        if (autoExpandHeight && !expanded) {
            setExpanded(true)
        }
    }, [autoExpandHeight])

    
    /* ------------------------- FUNCTIONS ------------------------ */

    const handleExpansion = (e) => {
        setExpanded(!expanded)
    }

    /* -------------------------- STYLES ------------------------- */

    const useStyles = makeStyles(theme => {

        const { primary, secondary } = theme.palette

        return ({
            accordionWrapper: {
                padding: "6px",
                marginBottom: "20px",
                position: "relative"
            },
            accordion: {
                minHeight: "15vh",
                borderRadius: "3px",
                position: "relative"
            },
            deleteButton: {
                color: showIncomeDeleteIcons ? primary.main : secondary.main,
                padding: "0 5px 0 5px",
                fontWeight: "700",
                fontSize: "9px",
                ...theme.lato
            }
        })
    })
    
    const classes = useStyles(props.theme)


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
        <GradientWrapper
            theme={props.theme}
            className={classes.accordionWrapper}
        >
            <Accordion 
                onChange={(e) => handleExpansion(e)}
                className={classes.accordion}
                expanded={expanded} 
            >
                <AccordionDropdownTab 
                    expanded={expanded}
                />
                <AddDeleteButtons
                    { ...props }
                    fromIncomeAccordion={{...addDelButtonGroupProps}}
                />
                <IncomeTable 
                    { ...props }
                    fromIncomeAccordion={{...incomeTableProps}}
                />
            </Accordion>
        </GradientWrapper>
    )
}

export default IncomeAccordion

