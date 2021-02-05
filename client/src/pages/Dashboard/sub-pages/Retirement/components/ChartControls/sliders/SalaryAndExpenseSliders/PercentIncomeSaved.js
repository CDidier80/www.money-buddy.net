import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'

const PercentIncomeSaved = memo((props) => {

    const { 
        makeMarks, 
        percentIncomeSaved, 
        setPercentIncomeSaved, 
    } = props

    const themedSliderProps = {
        marks: makeMarks(0, 100),
        min: 0, step: 1, max: 100,
        hookValue: percentIncomeSaved,
        ariaLabel: "perc-income-saved-slider",
        makeLabel: (value, index) => `${value}%`,
        setHook: (e, value) => setPercentIncomeSaved(value),
    }

    return (
        <ThemedSlider fromSliderParent={{...themedSliderProps}} />
    )
}, 
    (prevProps, nextProps) => deepPropCheck(prevProps, nextProps)
)

export default PercentIncomeSaved
