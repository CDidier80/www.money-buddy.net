import { 
    insertionSort, 
    findGapInNumbers, 
    divideDefaultsAndUserSources, 
} from "../../../../../../universal-functions/sortingFunctions"
import AddDeleteButtonGroup from "../../../../../../../../../TopLevelComponents/AddDeleteButtons/AddDelButtonGroup"
import React from 'react'

const AddDeleteButtons = (props) => {

    const { 
        tick,
        newIncomes,
        updateBudget,
        toggleChanges,
        setNewIncomes,
        userMadeChanges,
    } = props.fromBudget


    const {
        smallerButtons,
        lengthOfIncomes,
        setLengthOfIncomes,
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons,
    } = props.fromIncomeAccordion
    
    const addIncome = (e) => {
        e.preventDefault() 

        const updateBudgetIncomes = (incomeArray) => {
            setNewIncomes(incomeArray)
            if (!userMadeChanges) {
                toggleChanges(true)
            }
            setLengthOfIncomes(lengthOfIncomes + 1)
            updateBudget(tick + 1)
        }

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
        }   
    }

    

    const handleDeleteIncomeIcons = (e) => {
        e.preventDefault()
        toggleIncomeDeleteIcons(!showIncomeDeleteIcons)
    }

    const deleteButtonProps = {
        deleteHandler: handleDeleteIncomeIcons,
        deleteText: "Delete Income"
    }

    const addButtonProps = {
        addHandler: addIncome,
        addText: "Add Income"
    }

    const otherProps = {
        iconsDisplayed: showIncomeDeleteIcons,
        smallerButtons: smallerButtons,
        variant: "primary",
    }

    return (
            <AddDeleteButtonGroup 
                {...deleteButtonProps}
                {...addButtonProps}
                {...otherProps}
                {...props}
            />
    )
}

export default AddDeleteButtons
