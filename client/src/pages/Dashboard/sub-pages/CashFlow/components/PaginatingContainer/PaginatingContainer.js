import React from 'react'
import MonthContainer from "../MonthContainer/MonthContainer"
import "./styles/paginator.css"

const PaginatingContainer = (props) => {
    
    console.log(props)
    const { newMonths } = props.fromCashflow

    return (
        <div className="paginating-container">
            {newMonths.map((month, index) => {
                    const monthContainerProps = {
                        thisMonth: month,
                        monthIndex: index,
                    }
                return (
                    <MonthContainer 
                        className="month-container"
                        key={`ABC${index}`}
                        {...props}
                        fromPaginatingContainer={{...monthContainerProps}}
                    />
                )
                })}
        </div>
    )
}

export default PaginatingContainer

