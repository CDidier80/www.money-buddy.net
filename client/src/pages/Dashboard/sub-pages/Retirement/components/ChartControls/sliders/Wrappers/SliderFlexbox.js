import LabledSliderBox from "./LabledSliderBox"
import React from 'react'

const SliderFlexbox = ({item1, item2, item3}) => {

    const forItem1 = {
        ...item1,
        margin: "5px 0 5px 5px",
        borderRadius: "4px 0 0 4px"
    }

    const forItem2 = {
        ...item2,
        margin: "5px 0 5px 0",
        borderRadius: "0"
    }

    const forItem3 = {
        ...item3,
        margin: "5px 5px 5px 0",
        borderRadius: "0 4px 4px 0"
    }
    

    return (
        <div className="slider-flexbox"  >
            <LabledSliderBox {...forItem1} />
            <LabledSliderBox {...forItem2} />
            <LabledSliderBox {...forItem3} />
        </div>
    )
}

export default SliderFlexbox
