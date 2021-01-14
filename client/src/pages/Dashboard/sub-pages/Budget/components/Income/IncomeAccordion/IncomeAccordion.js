import React, { useState } from 'react';
import IncomeTable from "../IncomeTable/IncomeTable"
import AddDelButtonGroup from "./components/buttons/AddDelButtonGroup"
import AccordionDropdownTab from "./components/AccordionDropdownTab"
import { makeStyles, Accordion } from '@material-ui/core';


const IncomeAccordion = (props) => {
    
    {/*  PROPS */}
    
    const { newIncomes } = props.fromBudget
    
    
    {/*  STATE */}
    
    const [showIncomeDeleteIcons, toggleIncomeDeleteIcons] = useState(false)
    const [lengthOfIncomes, setLengthOfIncomes] = useState(newIncomes.length)


    {/* FUNCTIONS */}

    const useStyles = makeStyles({
        accordion: {
            marginBottom: "20px",
            borderRadius: "3px",
            minHeight: "15vh",
        },
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showIncomeDeleteIcons ? "#e6a824" : "#22c1c3",
            padding: "0 5px 0 5px"
        }
    })
    
    const classes = useStyles()

    const incomeTableProps = {
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons
    }

    const addDelButtonGroupProps = {
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons,
        setLengthOfIncomes,
        lengthOfIncomes
    }
    
    return (
        <Accordion className={classes.accordion}>

            <AccordionDropdownTab />
            <AddDelButtonGroup 
                {...props}
                fromIncomeAccordion={{...addDelButtonGroupProps}}
            />
            <IncomeTable 
                {...props}
                fromIncomeAccordion={{...incomeTableProps}}
            />
        </Accordion>
    )
}

export default IncomeAccordion

