import React from 'react'
import { makeHeaderStyles } from "./styles"

const Header = (props) => {

    const overrides = props.overrides || {}

    const { 
        header,
        flexWrapper, 
        headerWrapper, 
    } = makeHeaderStyles(props.theme)

    return (
        <div 
            className={flexWrapper} 
            style={overrides}
        >
            <div className={headerWrapper}>
                <h1 className={header} >
                    {props.text || "Header"}
                </h1>
            </div>
            {props.children}
        </div>
    )
}

export default Header
