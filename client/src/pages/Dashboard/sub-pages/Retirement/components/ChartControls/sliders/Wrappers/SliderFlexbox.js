import { makeSliderFlexboxStyles } from "../../styles/style"
import LabledSliderBox from "./LabledSliderBox"
import React from 'react'

const SliderFlexbox = ({item1, item2, item3, theme}) => {

    const forItem1 = {
        borderRadius: "4px 0 0 4px",
        margin: "5px 0 5px 5px",
        ...item1,
    }

    const forItem2 = {
        margin: "5px 0 5px 0",
        borderRadius: "0",
        ...item2,
    }

    const forItem3 = {
        borderRadius: "0 4px 4px 0",
        margin: "5px 5px 5px 0",
        ...item3,
    }
    
    const classes = makeSliderFlexboxStyles(theme)

    return (
        <div className={classes.sliderFlexbox}  >
            <LabledSliderBox {...forItem1} />
            <LabledSliderBox {...forItem2} />
            <LabledSliderBox {...forItem3} />
        </div>
    )
}

export default SliderFlexbox
