import { 
    insertionSort, 
    findGapInNumbers, 
    divideDefaultsAndUserSources, 
} from "../../../../../../universal-functions/sortingFunctions"
import { makeStyles, Button } from '@material-ui/core/'
import React from 'react'


const AddButton = (props) => {

    const { 
        tick,
        newIncomes,
        updateBudget,
        toggleChanges,
        setNewIncomes,
        userMadeChanges,
    } = props.fromBudget


    const {
        lengthOfIncomes,
        setLengthOfIncomes,
    } = props.fromIncomeAccordion
    
    
    const useStyles = makeStyles({
        button: {
            fontSize: "9px",
            color: "#2c7b71",
            fontWeight: "700",
            padding: "0 5px 0 5px",
            fontFamily: "Lato, sans-serif",
        },
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
        let [userIncomes, sources] = divideDefaultsAndUserSources(incomesArrayCopy, "income")
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

    return (
        <Button 
            className={classes.button}
            onClick={(e) => addIncome(e)}
        >
            Add Income
        </Button>
    )
}

export default AddButton
