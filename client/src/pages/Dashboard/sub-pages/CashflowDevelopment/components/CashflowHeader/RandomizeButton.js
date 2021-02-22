import React from 'react'

export const RandomizeButton = (props) => {

    const {
        tick,
        setLoaded, 
        incrementTicker,
    } = props.fromCashflowDevelopment

    const rerender = (e) => {
        e.preventDefault()
        setLoaded(false)
        incrementTicker(tick + 1)
    }
    
    return (
        <button 
            onClick={(e) => rerender(e)}
            className="regenerate-button"
        >
            Randomize
        </button>
    )
}
