import Retirement from "../../sub-pages/Retirement/Retirement"
import { Route } from 'react-router-dom'
import React, { memo } from 'react'

const RetirementRoute = memo((props) => {
    
    return (
        <Route 
            component={ () => ( 
                <Retirement {...props}/> 
        )} 
    />
    )
},(prevProps, nextProps) => (prevProps.ticker !== nextProps.ticker))

export default RetirementRoute