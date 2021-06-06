import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'


const RetireAge = memo(props => {
    /* --------- setState hook for this slider --------- */
    const { 
        makeMarks,
        endingAge, 
        currentAge,
        lifespanAge,
        setEndingAge, 
    } = props

    const minValue = (currentAge + 1)
    const maxValue = (lifespanAge - 1)

    const themedSliderProps = {
        step: 1,
        min: minValue,
        max: maxValue,
        hookValue: endingAge,
        makeLabel: (value, i ) => value,
        ariaLabel: "lifespan-age-slider",
        marks: makeMarks(minValue, maxValue),
        setHook: (e, value) => setEndingAge(value),
    }

    return (
        <ThemedSlider
            fromSliderParent={{...themedSliderProps}}
        />
    )
}, 
    (prevProps, nextProps) => deepPropCheck(prevProps, nextProps)
)
export default RetireAge
