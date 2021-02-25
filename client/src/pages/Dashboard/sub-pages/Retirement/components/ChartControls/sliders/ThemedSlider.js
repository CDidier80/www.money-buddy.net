import { 
    ThemeProvider, 
    createMuiTheme,
} from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import React, { useRef, useLayoutEffect, useState } from 'react'
import { makeDeepClone } from "../../../../../../../modules/clientFunctions"
import { moneyBuddyTheme } from "../../../../../../../modules/themeAndStyles"


const ThemedSlider = (props) => {

    const { ariaLabel, hookValue, makeLabel, setHook, marks, step, min, max, } = props.fromSliderParent
    const labelLength = useRef(String(hookValue).length)
    labelLength.current = String(hookValue).length

    const [theme, setNewTheme] = useState(createMuiTheme(makeDeepClone(moneyBuddyTheme)))

    useLayoutEffect(() => {
        let fontSize = moneyBuddyTheme.overrides.MuiSlider.valueLabel.fontSize
        const fontTooLargeForTooltip = fontSize === "11px" && labelLength >= 3
        const fontTooSmallForTooltip = fontSize === "10px" && labelLength  < 3
        const fontMustChange = (fontTooLargeForTooltip || fontTooSmallForTooltip)
        if (fontMustChange){
            const freshlyClonedData = makeDeepClone(moneyBuddyTheme)
            const newTheme = createMuiTheme(freshlyClonedData)
            setNewTheme(newTheme)
        }
    }, [labelLength])

    return (
        <ThemeProvider theme={theme} >
            <Slider
                onChange={(e, value) => setHook(e, value)}
                valueLabelFormat={makeLabel}
                aria-labelledby={ariaLabel}
                valueLabelDisplay={"on"}
                value={hookValue}
                track={"normal"}
                marks={marks}
                step={step}
                min={min}
                max={max}
            />
        </ThemeProvider>
    )
}

export default ThemedSlider

