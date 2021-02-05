import MonthContainer from "../MonthContainer/MonthContainer"
import NextAndBackIcons from "./NextAndBackIcons"
import React, { useState, memo } from "react"
import "./styles/paginator.css"

const PaginatingContainer = memo((props) => {

    /* Props */

    const { newMonths } = props.fromCashflowDevelopment

    /*  State */

    const [displayRange, setDisplayRange] = useState([0,1,2])
    const [pagMemoTicker, incrementPagTicker] = useState(0)

    /*  Props for children */

    const iconProps = {
        incrementPagTicker,
        setDisplayRange,
        pagMemoTicker,
        displayRange,
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
                            incrementPagTicker,
                            monthIndex: index,
                            thisMonth: month,
                            setDisplayRange,
                            pagMemoTicker,
                            displayRange,
                        }
                    return (
                        <MonthContainer 
                            {...props}
                            key={`ABC${index}`}
                            className="month-container"
                            displayRange={displayRange}
                            fromPaginatingContainer={{...monthContainerProps}}
                        />
                    )
                    })}
            </div>
        </div>
    )
}, (prevProps, nextProps) => {
        const { showPopup: prevPop} = prevProps.fromCashflowDevelopment
        const { showPopup: nextPop} = nextProps.fromCashflowDevelopment
        return prevPop !== nextPop
    }
)

export default PaginatingContainer

