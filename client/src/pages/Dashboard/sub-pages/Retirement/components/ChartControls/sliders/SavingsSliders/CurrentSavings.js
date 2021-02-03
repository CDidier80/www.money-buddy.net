import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'


const CurrentSavings = memo((props) => {

    const { 
        makeMarks,
        dollarFormat, 
        currentSavings, 
        setCurrentSavings, 
    } = props

    const themedSliderProps = {
        hookValue: currentSavings,
        marks: makeMarks(0, 200000),
        min: 0, step: 500, max: 200000,
        ariaLabel: "current-savings-slider",
        makeLabel: (v,i) => dollarFormat(v,i),
        setHook: (e, value) => setCurrentSavings(value),
    }

    return (
        <ThemedSlider fromSliderParent={{...themedSliderProps}} />
    )
}, (prevProps, nextProps) => deepPropCheck(prevProps, nextProps) )

export default CurrentSavings
