import React from 'react'
import "./cashflowHeader.css"

const CashflowHeader = (props) => {
    const {
        setLoaded, 
        tick,
        incrementTicker,
    } = props.fromCashflowDevelopment

    const rerender = (e) => {
        e.preventDefault()
        setLoaded(false)
        incrementTicker(tick + 1)
    }
    return (
        <div className="header-and-button-wrapper">
            <div className="page-header-wrapper">
                <h1 className="page-header">CASH FLOWS</h1>
            </div>
            <button 
                onClick={(e) => rerender(e)}
                className="regenerate-button"
            >
                Randomize
            </button>
        </div>
    )
}

export default CashflowHeader
