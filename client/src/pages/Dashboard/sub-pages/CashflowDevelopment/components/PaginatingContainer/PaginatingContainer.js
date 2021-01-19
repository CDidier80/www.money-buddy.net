import React from 'react'
import MonthContainer from "../MonthContainer/MonthContainer"
import NextAndBackIcons from "./NextAndBackIcons"
import "./styles/paginator.css"

const PaginatingContainer = (props) => {
    // console.log(props)
    const { newMonths } = props.fromCashflowDevelopment

    return (
        <div
            className="paginating-container"
        >
            <NextAndBackIcons />
            <div className="monthContainer-wrapper">
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
        </div>
    )
}

export default PaginatingContainer

