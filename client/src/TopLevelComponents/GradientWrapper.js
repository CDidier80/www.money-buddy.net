import React from 'react'

const GradientWrapper = (props) => {

    const overrides = props.overrides || {}
    const { boxShadows, palette, gradients } = props.theme

    const styles = {
        overflow: "visible",
        borderRadius: "8px",
        boxShadow: boxShadows.shadow2,
        padding: (props.padding || '8px'),
        backgroundColor: palette.primary.main,
        backgroundImage: gradients.wrapper,
        ...overrides
    }
    
    return  (
        <div 
            style={styles}
            className={props.className || ""}
        >
            {props.children}
        </div>
    )
}

export default GradientWrapper
