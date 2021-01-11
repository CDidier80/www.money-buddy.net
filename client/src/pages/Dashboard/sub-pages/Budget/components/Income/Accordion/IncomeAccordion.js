import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { divideDefaultsAndUserSources, insertionSort, findGapInNumbers } from "./modules/incomeSortFunctions"
import IncomeTable from "./IncomeTable/IncomeTable"
import unconditionalStyles from "./styles/unconditionalStyles"
import { 
    makeStyles, 
    Button,
    ButtonGroup,
    Typography, 
    Accordion,
    AccordionDetails,
    AccordionSummary,
} from '@material-ui/core';



const IncomeAccordion = (props) => {
    // console.log('INCOME ACCORDION PROPS: ', props)
    {/*  PROPS */}
    
    const { 
        newIncomes,
        setNewIncomes,
        toggleChanges,
        userMadeChanges,
        updateBudget,
        tick
    } = props.fromBudget
    
    
    {/*  STATE */}
    
    const [showIncomeDeleteIcons, toggleIncomeDeleteIcons] = useState(false)
    const [lengthOfIncomes, setLengthOfIncomes] = useState(newIncomes.length)
    const [fourColumns, setFourColumns] = useState(false)


    {/* FUNCTIONS */}

    const useStyles = makeStyles({
        ...unconditionalStyles, 
        deleteButton: {
            fontSize: "9px",
            fontWeight: "700",
            fontFamily: "Lato, sans-serif",
            color: showIncomeDeleteIcons ? "#e6a824" : "#22c1c3",
            padding: "0 5px 0 5px"
        }
    })
    
    const classes = useStyles()


    const updateBudgetIncomes = (incomeArray) => {
        setNewIncomes(incomeArray)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
        setLengthOfIncomes(lengthOfIncomes + 1)
        updateBudget(tick + 1)
    }


    const addIncome = (e) => {
        e.preventDefault() 
        let incomesArrayCopy = newIncomes
        let [userIncomes, sources] = divideDefaultsAndUserSources(incomesArrayCopy)
        if (sources.length === 0){
            updateBudgetIncomes([
                ...incomesArrayCopy, 
                {
                    source: "income source #1",
                    amount: 0
                }
            ])
            return
        } else {
            sources = insertionSort(sources)
            sources = findGapInNumbers(sources)
            const defaults = sources.map(num => ({source: ("income source #" + String(num)), amount: 0}))
            incomesArrayCopy = [...userIncomes, ...defaults]
            updateBudgetIncomes(incomesArrayCopy)
            // console.log("final copy of incomesArrayCopy: ", incomesArrayCopy)
        }   
    }


    const handleDeleteIncomeIcons = (e) => {
        e.preventDefault()
        toggleIncomeDeleteIcons(!showIncomeDeleteIcons)
        setFourColumns(!fourColumns)
    }
    

    const incomeTableProps = {
        fourColumns,
        setFourColumns,
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons
    }

    const expandIconStyle = {color:"#22c1c3", paddingTop: "31px"}
    
    return (
        <Accordion className={classes.accordion}>

            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={expandIconStyle}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography 
                    className={classes.heading}
                >
                    Income
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <ButtonGroup className={classes.buttonGroup} 
                    variant="text" 
                    color="primary" 
                    aria-label="text primary button group"
                >
                    <Button 
                        className={classes.button}
                        onClick={(e) => addIncome(e)}
                    >
                        Add Income
                    </Button>
                    <Button 
                        className={classes.deleteButton}
                        onClick={(e) => handleDeleteIncomeIcons(e)}
                    >
                        {showIncomeDeleteIcons ? "Cancel Delete" : "Delete Income"}
                    </Button>
                </ButtonGroup>
            </AccordionDetails>

            <IncomeTable 
                {...props}
                fromIncomeAccordion={{...incomeTableProps}}
            />
        </Accordion>
    )
}

export default IncomeAccordion

