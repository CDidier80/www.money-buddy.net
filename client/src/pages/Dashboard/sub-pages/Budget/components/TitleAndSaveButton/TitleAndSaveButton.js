import Header from "../../../../components/reuseable/Header"
import SaveBudgetButton from "./components/SaveBudgetButton"
import React from 'react'

const TitleAndSaveButton = (props) => {

    const { userMadeChanges } = props.fromBudget

    return (
        <Header text="BUDGET" >
            { userMadeChanges && <SaveBudgetButton {...props} /> }
        </Header>
    )
}

export default TitleAndSaveButton
