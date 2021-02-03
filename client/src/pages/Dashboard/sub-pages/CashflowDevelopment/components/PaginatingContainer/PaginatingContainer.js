import React, { useState, memo } from 'react'
import MonthContainer from "../MonthContainer/MonthContainer"
import NextAndBackIcons from "./NextAndBackIcons"
import "./styles/paginator.css"

const PaginatingContainer = memo((props) => {
    const { newMonths } = props.fromCashflowDevelopment

    const [displayRange, setDisplayRange] = useState([0,1,2])
    const [pagMemoTicker, incrementPagTicker] = useState(0)

    const iconProps = {
        displayRange,
        setDisplayRange,
        pagMemoTicker,
        incrementPagTicker
    }

    return (
        <div
            className="paginating-container"
        >
            <NextAndBackIcons 
                fromPaginatingContainer={{...iconProps}}
            />
            <div className="monthContainer-wrapper">
                {newMonths.map((month, index) => {
                        const monthContainerProps = {
                            thisMonth: month,
                            monthIndex: index,
                            displayRange,
                            setDisplayRange,
                            pagMemoTicker,
                            incrementPagTicker
                        }
                    return (
                        <MonthContainer 
                            {...props}
                            className="month-container"
                            key={`ABC${index}`}
                            fromPaginatingContainer={{...monthContainerProps}}
                            displayRange={displayRange}
                        />
                    )
                    })}
            </div>
        </div>
    )
}, (prevProps, nextProps) => prevProps.fromCashflowDevelopment.showPopup !== nextProps.fromCashflowDevelopment.showPopup)

export default PaginatingContainer

