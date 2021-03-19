
import AddDeleteButtonGroup from "../../../../../../../../TopLevelComponents/AddDeleteButtons/AddDelButtonGroup"
import React from 'react'

const AddDeleteButtons = (props) => {

    const { 
        tick,
        newIncomes,
        updateBudget,
        toggleChanges,
        setNewIncomes,
    } = props.fromBudget


    const {
        lengthOfIncomes,
        setLengthOfIncomes,
        showIncomeDeleteIcons,
        toggleIncomeDeleteIcons,
    } = props.fromIncomeAccordion
    

    const addIncome = (e) => {
        e.preventDefault() 
        setLengthOfIncomes(lengthOfIncomes + 1)
        updateBudget(tick + 1)
        toggleChanges(true)
        let incomesArrayCopy = [...newIncomes]
        incomesArrayCopy.unshift({source: `income source #${newIncomes.length + 1}`, amount: 0 })
        setNewIncomes(incomesArrayCopy)
    }


    const handleDeleteIncomeIcons = (e) => {
        e.preventDefault()
        toggleIncomeDeleteIcons(!showIncomeDeleteIcons)
    }

    const deleteButtonProps = {
        deleteHandler: handleDeleteIncomeIcons,
        deleteText: showIncomeDeleteIcons ? "Cancel Delete" : "Delete Income" 
    }

    const addButtonProps = {
        addHandler: addIncome,
        addText: "Add Income"
    }

    const otherProps = {
        iconsDisplayed: showIncomeDeleteIcons,
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
