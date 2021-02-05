import CashflowDevelopment from "../../sub-pages/CashflowDevelopment/CashflowDevelopment"
import { Route } from 'react-router-dom'
import React, { memo } from 'react'

const CashflowDevRoute = memo((props) => {
    
    return (
        <Route 
            component={ () => ( 
                <CashflowDevelopment {...props}/> 
        )} 
    />
    )
},(prevProps, nextProps) => (prevProps.ticker !== nextProps.ticker))

export default CashflowDevRoute