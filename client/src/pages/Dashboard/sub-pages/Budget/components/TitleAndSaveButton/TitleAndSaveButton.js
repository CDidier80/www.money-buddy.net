import React from 'react'
import SaveBudgetButton from "./components/SaveBudgetButton"

const TitleAndSaveButton = (props) => {

    const { userMadeChanges } = props.fromBudget

    return (
        <div className="header-and-button-wrapper">
            <div className="page-header-wrapper">
                <h1 className="page-header">BUDGET</h1>
            </div>
            {userMadeChanges && 
                <SaveBudgetButton 
                    {...props} 
                />
            }
        </div>
    )
}

export default TitleAndSaveButton
