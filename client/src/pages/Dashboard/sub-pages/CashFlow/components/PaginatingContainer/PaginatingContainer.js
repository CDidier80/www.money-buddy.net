import React from 'react'
import MonthContainer from "../MonthContainer/MonthContainer"

const PaginatingContainer = (props) => {
    
    const {newMonths} = props.fromCashflow

    return (
        <div>
            {newMonths.map((month, index) => {
                    const monthContainerProps = {
                        thisMonth: month,
                        monthIndex: index,
                    }

                return (
                    <MonthContainer 
                        {...props}
                        fromPaginatingContainer={{...monthContainerProps}}
                    />
                )
                })}
        </div>
    )
}

export default PaginatingContainer
