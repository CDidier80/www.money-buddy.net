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

    const mediaQueries = {
        "@media (max-width: 730px)": {
            button: {
                minWidth: "65px",
                fontSize: "11px",
                maxHeight: "40px"
            }
        }
    }

    const buttonProps = {
        onClick: (e) => rerender(e),
        jssOverrides: { width: "10vw", minWidth: "100px" },
        mediaQueries
    }
    
    return (
        <ThemedButton {...buttonProps} >
            Randomize
        </ThemedButton>
    )
}
