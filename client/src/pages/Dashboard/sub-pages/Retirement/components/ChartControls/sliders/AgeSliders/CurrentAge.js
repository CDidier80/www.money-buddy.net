import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"

import React, { memo } from 'react'

const CurrentAge = memo((props) => {

    /* --------- hooks assigned to this slider --------- */
    const { 
        setCurrentAge, 
        currentAge,
        endingAge,
        makeMarks
    } = props

    const maxValue = (endingAge - 1)



    const themedSliderProps = {
        min: 0,
        step: 1,
        max: maxValue,
        hookValue: currentAge,
        marks: makeMarks(0, maxValue),
        ariaLabel: "lifespan-age-slider",
        makeLabel: (value, i ) => value,
        setHook: (e, value) => setCurrentAge(value),
    }

    return (
        <ThemedSlider
            fromSliderParent={{...themedSliderProps}}
        />
    )
}, (prevProps, nextProps) => deepPropCheck(prevProps, nextProps))

export default CurrentAge
