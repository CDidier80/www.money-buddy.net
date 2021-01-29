import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'


const RetirementSpending = memo((props) => {

    /* --------- setState hook for this slider --------- */
    const { 
        makeMarks,
        dollarFormat, 
        retirementSpending, 
        setRetirementSpending, 
    } = props
    
    const themedSliderProps = {
        marks: makeMarks(0, 500000),
        hookValue: retirementSpending,
        min: 0, step: 1000, max: 500000,
        makeLabel: (v,i) => dollarFormat(v,i),
        ariaLabel: "retirement-spending-slider",
        setHook: (e, value) => setRetirementSpending(value),
    }

    return (

        <ThemedSlider fromSliderParent={{...themedSliderProps}} />

    )
}, 
    (prevProps, nextProps) => deepPropCheck(prevProps, nextProps)
)

export default RetirementSpending
