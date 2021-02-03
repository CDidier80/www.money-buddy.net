import React, { memo } from 'react';
import { Route } from 'react-router-dom'
import Retirement from "../../sub-pages/Retirement/Retirement"

const RetirementRoute = memo((props) => {
    
    return (
        <Route 
            component={ () => ( 
                <Retirement {...props}/> 
        )} 
    />
    )
},(prevProps, nextProps) => {
    return (prevProps.ticker !== nextProps.ticker)
})

export default RetirementRoute