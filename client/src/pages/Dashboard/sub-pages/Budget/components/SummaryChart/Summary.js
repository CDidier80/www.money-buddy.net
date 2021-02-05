import ButtonGroupToggler from "./components/ButtonGroupToggler/ButtonGroupToggler"
import SummaryTable from "./components/SummaryTable/SummaryTable"
import React, { useState, useEffect } from 'react';
import "./styles/summary.css"


const Summary = (props) => {

    const [monthly, setMonthly] = useState(false)

    const childrenProps = {
        setMonthly,
        monthly
    }

    return (
        <div className="gradient-wrapper summary-chart">
            <div className="summary-container">
                <h3 className="widget-header">Summary</h3>
                <SummaryTable 
                    {...props}
                    fromSummary={{...childrenProps}}
                />
                <ButtonGroupToggler 
                    fromSummary={{...childrenProps}}
                />
            </div>
        </div>

    )
}

export default Summary