import React, { memo } from 'react';
import { Route } from 'react-router-dom'
import Markets from "../../sub-pages/Markets/Markets"

const MarketsRoute = memo((props) => {
    
    return (
        <Route 
            component={ () => ( 
                <Markets { ...props }/> 
        )} 
    />
    )
},(prevProps, nextProps) => {
    return (prevProps.ticker !== nextProps.ticker)
})

export default MarketsRoute