import { deepPropCheck } from "../../../../../../../../modules/clientFunctions"
import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'


const SalaryGrowthRate = memo(props => {

    /* --------- hooks assigned to this this slider --------- */
    const { 
        makeMarks, 
        salaryGrowthRate, 
        setSalaryGrowthRate, 
    } = props

    const themedSliderProps = {
        marks: makeMarks(0, 50),
        min: 0, step: 1, max: 50,
        hookValue: salaryGrowthRate,
        makeLabel: (value, i) => `${value}%`,
        ariaLabel: "salary-growth-rate-slider",
        setHook: (e, value) => setSalaryGrowthRate(value),
    }

    return (
        <ThemedSlider fromSliderParent={{...themedSliderProps}} />
    )
}, 
    (prevProps, nextProps) => deepPropCheck(prevProps, nextProps)
)

export default SalaryGrowthRate
