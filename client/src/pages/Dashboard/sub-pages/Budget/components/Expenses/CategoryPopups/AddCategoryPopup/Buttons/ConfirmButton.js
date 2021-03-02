import ThemedButton from "../../../../../../../../../TopLevelComponents/ThemedButton"
import React from 'react'

const ConfirmButton = (props) => {

    const { 
        toggleAddCategoryPanel,
        fromBudget, 
        setError, 
        classes,
        text, 
    } = props

    const { 
        userMadeChanges,
        setNewCategories, 
        newCategories, 
        toggleChanges, 
    } = fromBudget


    const confirm = (e) => {
        e.preventDefault()
        let categoriesArrayCopy = newCategories
        let duplicates = false
        newCategories.forEach(category => {
            if(text === category.name){
                setError(true)
                duplicates = true
            }
            return
        })
        if (duplicates) return
        let newCategory = {name: text, expenses: []}
        categoriesArrayCopy.push(newCategory)
        setNewCategories(categoriesArrayCopy)
        toggleAddCategoryPanel(false)
        if (!userMadeChanges) {
            toggleChanges(true)
        }
    }

    return (
        <ThemedButton 
            onClick={(e) => confirm(e)} 
            className={classes.button}
        >
            Confirm
        </ThemedButton>
    )
}

export default ConfirmButton
