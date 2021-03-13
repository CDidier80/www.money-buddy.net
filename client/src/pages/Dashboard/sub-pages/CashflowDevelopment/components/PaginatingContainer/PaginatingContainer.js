import MonthContainer from "../MonthContainer/MonthContainer"
import PaginatingButtons from "./PaginatingButtons"
import React, { useState, memo } from "react"
import "./styles/paginator.css"

const PaginatingContainer = memo((props) => {

    /* Props */

    const { newMonths } = props

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
            <PaginatingButtons {...iconProps} />
            <div className="monthContainer-wrapper">
                { newMonths.map((month, index) => {
                    const monthContainerProps = {
                        className: "month-container",
                        incrementPagTicker,
                        key: `ABC${index}`,
                        monthIndex: index,
                        thisMonth: month,
                        setDisplayRange,
                        pagMemoTicker,
                        displayRange,
                        ...props,
                    }
                    return <MonthContainer {...monthContainerProps} />
                })}
            </div>
        </div>
    )
}, ({showPopup: prevShowPopup}, {showPopup: nowShowPopup}) => prevShowPopup !== nowShowPopup)    

export default PaginatingContainer

