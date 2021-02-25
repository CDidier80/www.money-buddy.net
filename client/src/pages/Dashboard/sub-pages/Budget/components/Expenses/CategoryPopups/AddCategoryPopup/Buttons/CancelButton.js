import ThemedButton from "../../../../../../../../../TopLevelComponents/ThemedButton"
import React from 'react'

const CancelButton = (props) => {

    const { toggleAddCategoryPanel } = props

    const closePopup = (e) => {
        e.preventDefault()
        toggleAddCategoryPanel(false)
    }

    return (
        <ThemedButton onClick={(e) => closePopup(e)} >
            Back
        </ThemedButton>
    )
}

export default CancelButton
