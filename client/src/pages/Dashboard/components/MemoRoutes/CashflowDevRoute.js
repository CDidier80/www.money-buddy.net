import React, { memo } from 'react';
import { Route } from 'react-router-dom'
import CashflowDevelopment from "../../sub-pages/CashflowDevelopment/CashflowDevelopment"

const CashflowDevRoute = memo((props) => {
    
    return (
        <Route 
            component={ () => ( 
                <CashflowDevelopment { ...props }/> 
        )} 
    />
    )
},(prevProps, nextProps) => {
    return (prevProps.ticker !== nextProps.ticker)
})

export default CashflowDevRoute