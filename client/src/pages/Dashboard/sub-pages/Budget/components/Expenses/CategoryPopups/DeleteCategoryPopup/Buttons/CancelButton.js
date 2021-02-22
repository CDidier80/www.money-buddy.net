import ThemedButton from "../../../../../../../../../TopLevelComponents/ThemedButton"
import React from 'react'

const CancelButton = (props) => {

    const { toggleCategoryDeletePopup } = props.fromCategoryAccordion

    const closePopup = (e) => {
        e.preventDefault()
        toggleCategoryDeletePopup(false)
    }

    return (
        <ThemedButton 
            onClick={(e) => closePopup(e)} 
            className={props.classes.button}
        >
            Back
        </ThemedButton>
    )
}

export default CancelButton
