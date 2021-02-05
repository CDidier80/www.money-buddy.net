import Budget from "../../sub-pages/Budget/Budget"
import { Route } from 'react-router-dom'
import React, { memo } from 'react'

const BudgetRoute = memo((props) => {
    
    return (
        <Route 
            component={ () => ( 
                <Budget {...props}/> 
        )} 
    />
    )
},(prevProps, nextProps) => prevProps.ticker !== nextProps.ticker)

export default BudgetRoute