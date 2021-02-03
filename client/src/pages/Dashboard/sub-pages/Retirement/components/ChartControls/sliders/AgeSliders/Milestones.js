import ThemedSlider from "../ThemedSlider"
import React, { memo } from 'react'


const Milestones = memo((props) => {


    /* ---- 3 setState hooks for this slider ---- */
    const { 
        endingAge,
        currentAge,
        lifespanAge,
        setEndingAge,
        setCurrentAge,
        setLifespanAge,
    } = props.fromChartControls


    const marks = [
        {
            value: 0,
        },
        {
            value: 100,
        },
    ]


    /* --------- handlers for the 3 slider thumbs --------- */

    const handleChange = (e, value) => {
        // if age retireAge && retireAge < lifespan 
        if ( value[0] !== value[1] - 1 && value[1] !== value[2]){
            setCurrentAge(value[0])
            setEndingAge(value[1])
            setLifespanAge(value[2])
        }
    }

    const themedSliderProps = {
        ariaLabel: "milestones-slider",
        setHook: handleChange,
        marks: marks,
        hookValue: [
            currentAge, 
            endingAge, 
            lifespanAge
        ],
    }

    return (
            <ThemedSlider
                fromSliderParent={{...themedSliderProps}}
            />
    )
}, (prevProps, nextProps) => {
    const deepPropCheck = (props) => Object.values(props.fromChartControls).filter(value => typeof value === "number").toString()
    return deepPropCheck(prevProps) === deepPropCheck(nextProps) ? true : false
})

export default Milestones
