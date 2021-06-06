import ButtonGroupToggler from "./components/buttons/ButtonGroupToggler"
import GradientWrapper from "../../../../../../TopLevelComponents/GradientWrapper"
import SummaryTable from "./components/SummaryTable/SummaryTable"
import React, { useState } from 'react'
import "./styles/summary.css"


const Summary = props => {

    const [monthly, setMonthly] = useState(false)

    const childrenProps = {
        setMonthly,
        monthly
    }

    return (

        <GradientWrapper
            theme={props.theme}
            className={"gradient-wrapper summary-chart"}
        >
            <div className="summary-container">
                <h3 className="widget-header">Summary</h3>
                <SummaryTable 
                    { ...props }
                    fromSummary={{...childrenProps}}
                />
                <ButtonGroupToggler 
                    fromSummary={{...childrenProps}}
                />
            </div>
        </GradientWrapper>

    )
}

export default Summary