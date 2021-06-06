import React, { memo } from 'react';
import { Route } from 'react-router-dom'
import Budget from "../../sub-pages/Budget/Budget"

const BudgetRoute = memo(props => {
    
    return (
        <Route 
            component={ () => ( 
                <Budget { ...props }/> 
        )} 
    />
    )
},(prevProps, nextProps) => {
    // returning a true value causes component to skip rerender
    // if the cause of rerender is a change in ticker (caused by collapsing/opening menu),
    // the route should not rerender
    return (prevProps.ticker !== nextProps.ticker)
})

export default BudgetRoute