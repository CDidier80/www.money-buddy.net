import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'


const Salary = memo(props => {
    /* --------- setState hook for this slider --------- */
    const { 
        salary, 
        makeMarks,
        setSalary, 
        dollarFormat, 
    } = props

    const themedSliderProps = {
        hookValue: salary,
        ariaLabel: "salary-slider",
        marks: makeMarks(0, 500000,),
        min: 0, step: 500, max: 500000,
        setHook: (e, value) => setSalary(value),
        makeLabel: (v, i ) => dollarFormat(v, i),
    }

    return (
        <ThemedSlider
            fromSliderParent={{...themedSliderProps}}
        />
    )
}, 
    (prevProps, nextProps) => deepPropCheck(prevProps, nextProps)
)

export default Salary
