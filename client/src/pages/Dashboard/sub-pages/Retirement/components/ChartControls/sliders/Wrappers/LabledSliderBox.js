import { gradientWrapper } from '../../../../../../../../modules/styles'
import React from 'react'

const LabledSliderBox = (props) => {

    const {
        sliderComponent: SliderComponent,
        borderRadius,
        sliderProps,
        margin,
        label
    } = props

    const box = {
        width: "30%",
        flexGrow: 1,
        display: "flex",
        // ...gradientWrapper,
        alignItems: "center",
        flexDirection: "column",
        borderRadius: borderRadius, 
        padding: "6px",
        margin: margin,
        backgroundColor: "white"
    }


    const newProps = {
        ...sliderProps,
        makeMarks: (value1, value2, label1, label2) => ([
            { value: value1, label: label1 },
            { value: value2, label: label2 },
        ])
    }
    
    return (
        <div style={box} >
            <div className="slider-wrapper">
                <SliderComponent {...newProps} />
            </div>
            <div className="label-wrapper">
                <p>{label}</p>
            </div>
        </div>
    )
}

export default LabledSliderBox
