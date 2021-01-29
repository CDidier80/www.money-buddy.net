import SliderFlexbox from "./SliderFlexbox"
import Header from "../components/Header"
import React from 'react'

const SliderSection = ({fromChartControls}) => {
    
    const { header, flexItems } = fromChartControls

        return (
        <div className="slider-section">
            <Header text={header} />
            <SliderFlexbox {...flexItems} />
        </div>
    )
}

export default SliderSection

