import React from 'react'
import SavePageButton from "./SavePageButton"

const CashflowHeader = (props) => {

    const { userMadeChanges } = props.fromCashflow
    return (
        <div className="header-and-button-wrapper">
            <div className="page-header-wrapper">
                <h1 className="page-header">CASH FLOWS</h1>
            </div>
            {userMadeChanges && 
                <SavePageButton 
                    {...props}
                />
            }
        </div>
    )
}

export default CashflowHeader
