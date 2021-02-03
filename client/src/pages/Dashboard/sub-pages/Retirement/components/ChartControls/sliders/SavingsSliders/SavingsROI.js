import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'


const SavingsROI = memo((props) => {

    const { 
        makeMarks, 
        savingsROI, 
        setROISavings, 
    }= props
    
    const themedSliderProps = {
        hookValue: savingsROI,
        marks: makeMarks(0, 50),
        min: 0, step: 1, max: 50,
        ariaLabel: "savingsROI-slider",
        makeLabel: (value, i) => `${value}%`,
        setHook: (e, value) => setROISavings(value),
    }

    return (
        <ThemedSlider fromSliderParent={{...themedSliderProps}} />
    )
}, 
    (prevProps, nextProps) => deepPropCheck(prevProps, nextProps)
)

export default SavingsROI
