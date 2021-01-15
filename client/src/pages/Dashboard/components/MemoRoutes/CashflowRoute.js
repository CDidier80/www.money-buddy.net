import React, { memo } from 'react';
import { Route } from 'react-router-dom'
import Cashflow from "../../sub-pages/Cashflow/Cashflow"

const CashflowRoute = memo((props) => {
    
    return (
        <Route 
            component={ () => ( 
                <Cashflow {...props}/> 
        )} 
    />
    )
},(prevProps, nextProps) => {
    return (prevProps.ticker !== nextProps.ticker)
})

export default CashflowRoute