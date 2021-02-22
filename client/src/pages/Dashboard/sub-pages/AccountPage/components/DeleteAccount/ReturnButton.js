import ThemedButton from "../../../../../../TopLevelComponents/ThemedButton"
import React from 'react'

const ReturnButton = (props) => {

    const overrides = {
        width: "30%",
        fontSize: "14px"
    }

    return (
        <ThemedButton 
            theme={props.theme}
            overrides={overrides}
            onClick={() => props.setDeleteTriggered(false)}
        >
            Return
        </ThemedButton>
    )
}

export default ReturnButton
