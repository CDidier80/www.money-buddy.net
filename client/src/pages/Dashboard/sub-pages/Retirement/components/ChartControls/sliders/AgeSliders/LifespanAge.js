import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'

const LifespanAge = memo((props) => {
    
    const { 
        makeMarks,
        endingAge,
        lifespanAge, 
        setLifespanAge, 
    } = props

    const themedSliderProps = {
        hookValue: lifespanAge,
        makeLabel: (value, i ) => value,
        ariaLabel: "lifespan-age-slider",
        marks: makeMarks((endingAge + 1), 100),
        min: (endingAge + 1), step: 1, max: 100,
        setHook: (e, value) => setLifespanAge(value),
    }

    return (
        <ThemedSlider fromSliderParent={{...themedSliderProps}} />
    )
}, (prevProps, nextProps) => deepPropCheck(prevProps, nextProps) )

export default LifespanAge
