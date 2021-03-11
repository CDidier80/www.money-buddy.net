import ThemedButton from "../../../../../../TopLevelComponents/ThemedButton"
import React from 'react'

export const RandomizeButton = (props) => {

    const {
        tick,
        setLoaded, 
        incrementTicker,
    } = props

    const rerender = (e) => {
        e.preventDefault()
        setLoaded(false)
        incrementTicker(tick + 1)
    }

    const buttonProps = {
        onClick: (e) => rerender(e),
        overrides: {width: "10vw", minWidth: "100px"} 
    }
    
    return (
        <ThemedButton {...buttonProps} >
            Randomize
        </ThemedButton>
    )
}
