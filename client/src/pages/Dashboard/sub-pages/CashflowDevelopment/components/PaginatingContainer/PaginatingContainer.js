import MonthContainer from "../MonthContainer/MonthContainer"
import PaginatingButtons from "./PaginatingButtons"
import React, { useState, memo } from "react"
import "./styles/paginator.css"

const PaginatingContainer = memo(props => {

    /* Props */

    const { newMonths } = props.fromCashflowDevelopment

    /*  State */

    const [displayRange, setDisplayRange] = useState([0,1,2])
    const [pagMemoTicker, incrementPagTicker] = useState(0)

    /*  Props for children */

    const iconProps = {
        theme: props.theme,
        incrementPagTicker,
        setDisplayRange,
        pagMemoTicker,
        displayRange,
    }

    return (
        <div className="paginating-container" >
            <PaginatingButtons 
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
                            { ...props }
                            key={`ABC${index}`}
                            className="month-container"
                            fromPaginatingContainer={{...monthContainerProps}}
                        />
                    )
                    })}
            </div>
        </div>
    )
}, ({fromCashflowDevelopment: prev}, {fromCashflowDevelopment: now}) => (
    prev.showPopup !== now.showPopup
))    

export default PaginatingContainer

